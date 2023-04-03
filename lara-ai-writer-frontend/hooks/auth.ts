import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

export type User = {
    uuid: number;
    name: string;
    email: string;
    role: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
};

export type Auth = {
    user: User | undefined;
    register: (props: any) => Promise<void>;
    login: (props: any) => Promise<void>;
    logout: () => Promise<void>;
};

type AuthOptions = {
    middleware?: "guest" | "auth";
    redirectIfAuthenticated?: string | undefined;
};

export const useAuth = ({ middleware, redirectIfAuthenticated }: AuthOptions) => {
    const router = useRouter();

    const {
        data: user,
        error,
        mutate,
    } = useSWR("/api/user", () =>
        axios
            .get("/api/user")
            .then((res) => res.data)
            .catch((error) => {
                if (error.response.status !== 409) throw error;
                router.push("/verify-email");
            })
    );

    const csrf = () => axios.get("/sanctum/csrf-cookie");

    const register = async ({ setErrors, ...props }: any) => {
        await csrf();

        setErrors([]);

        axios
            .post("/register", props)
            .then(() => mutate())
            .catch((error) => {
                if (error.response.status !== 422) throw error;
                setErrors(error.response.data.errors);
            });
    };

    const login = async ({ setErrors, setStatus, ...props }: any) => {
        await csrf();

        setErrors([]);
        setStatus(null);

        axios
            .post("/login", props)
            .then(() => mutate())
            .catch((error) => {
                if (error.response.status !== 422) throw error;
                setErrors(error.response.data.errors);
            });
    };

    const logout = async () => {
        if (!error) {
            await axios.post("/logout").then(() => mutate());
        }

        window.location.pathname = "/login";
    };

    useEffect(() => {
        if (middleware === "guest" && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated);
        if (window.location.pathname === "/verify-email" && user?.email_verified_at) {
            if (redirectIfAuthenticated !== undefined) {
                router.push(redirectIfAuthenticated);
            }
        }

        if (middleware === "auth" && error) logout();
    }, [user, error]);

    return {
        user,
        register,
        login,
        logout,
    };
};
