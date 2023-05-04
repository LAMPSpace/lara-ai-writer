import { useAuth } from "@/hooks/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Input from "@/components/Forms/Input";
import Label from "@/components/Forms/Label";
import Button from "@/components/Forms/Button";
import InputError from "@/components/Forms/InputError";
import Link from "next/link";

const Login = () => {
    const router = useRouter();

    const { login } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard",
    });

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ email?: string[]; password?: string[] }>({});
    const [status, setStatus] = useState<string | null>(null);

    useEffect(() => {
        if (typeof router.query.reset === "string" && router.query.reset.length > 0 && !errors) {
            setStatus(atob(router.query.reset));
        } else {
            setStatus(null);
        }
    }, [router.query.reset, errors]);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        await login({
            email,
            password,
            remember: remember,
            setErrors,
            setStatus,
        });
    };

    // console.log(errors);

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <GuestLayout>
                <div className="bg-base-1 d-flex align-items-start align-items-lg-center flex-fill">
                    <div className="container h-100 py-6">
                        <div className="text-center d-block d-lg-none">
                            <h1 className="h2 mb-3 d-inline-block">Login</h1>
                            <div className="m-auto">
                                <p className="text-muted font-weight-normal font-size-lg mb-0">
                                    Welcome back.
                                </p>
                            </div>
                        </div>
                        <div className="row h-100 justify-content-center align-items-center mt-5 mt-lg-0">
                            <div className="col-12">
                                <div className="card border-0 shadow-sm overflow-hidden">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-lg-5">
                                            <div className="card-body p-lg-5">
                                                <form onSubmit={submitForm}>
                                                    <div className="form-group">
                                                        <Label htmlFor="i-email">
                                                            Email address
                                                        </Label>
                                                        <Input
                                                            id="i-email"
                                                            type="text"
                                                            className={`form-control ${errors.email ? "is-invalid" : ""
                                                                }`}
                                                            onChange={(
                                                                event: React.ChangeEvent<HTMLInputElement>
                                                            ): void => setEmail(event.target.value)}
                                                            name="email"
                                                            value={email}
                                                            autoFocus
                                                        />
                                                        <InputError message={errors.email} />
                                                    </div>
                                                    <div className="form-group">
                                                        <Label htmlFor="i-password">Password</Label>
                                                        <Input
                                                            id="i-password"
                                                            type="password"
                                                            className={`form-control ${errors.password ? "is-invalid" : ""
                                                                }`}
                                                            onChange={(
                                                                event: React.ChangeEvent<HTMLInputElement>
                                                            ): void =>
                                                                setPassword(event.target.value)
                                                            }
                                                            name="password"
                                                            value={password}
                                                        />
                                                        <InputError message={errors.password} />
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-6">
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    name="remember"
                                                                    id="i-remember"
                                                                    onChange={(
                                                                        event: React.ChangeEvent<HTMLInputElement>
                                                                    ): void =>
                                                                        setRemember(
                                                                            event.target.checked
                                                                        )
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="i-remember"
                                                                >
                                                                    Remember me
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 text-right">
                                                            <Link href="#">Forgot password?</Link>
                                                        </div>
                                                    </div>
                                                    <Button className="btn btn-block btn-primary py-2">
                                                        Login
                                                    </Button>
                                                </form>
                                            </div>
                                            <div className="card-footer bg-base-2 border-0">
                                                <div className="text-center text-muted my-2">
                                                    Don't have an account?
                                                    <Link
                                                        href="/register"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        Register
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7 bg-dark d-none d-lg-flex flex-fill background-size-cover background-position-center">
                                            <div className="card-body p-lg-5 d-flex flex-column flex-fill position-absolute top-0 right-0 bottom-0 left-0">
                                                <div className="d-flex align-items-center d-flex flex-fill">
                                                    <div className="text-light ml-5">
                                                        <div className="h2 font-weight-bold">
                                                            Login
                                                        </div>
                                                        <div className="font-size-lg font-weight-medium">
                                                            Welcome back.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
};

export default Login;
