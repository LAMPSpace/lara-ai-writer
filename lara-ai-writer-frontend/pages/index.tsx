import Head from "next/head";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import GuestLayout from "@/components/Layouts/GuestLayout";

export default function Home() {
    const { user } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard",
    });
    return (
        <>
            <Head>
                <title>Lara AI Writer</title>
            </Head>
            <GuestLayout>
                <div className="flex-fill">
                    <div className="bg-base-0 position-relative pt-5 pt-sm-6">
                        <div className="container position-relative z-1">
                            <div className="row py-sm-5">
                                <div className="col-12 text-center text-break">
                                    <h1 className="display-4 mb-0 font-weight-bold">
                                        Lara AI Writer
                                    </h1>
                                    <p className="text-muted font-weight-normal my-4 font-size-xl">
                                        Auto write your article with AI
                                    </p>
                                    <div className="pt-2 d-flex flex-column flex-sm-row justify-content-center">
                                        <a
                                            href="{{ route('login') }}"
                                            className="btn btn-primary btn-lg font-size-lg align-items-center mt-3"
                                        >
                                            <span className="d-none d-sm-block">Login</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
