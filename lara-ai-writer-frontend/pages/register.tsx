import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Input from "@/components/Forms/Input";
import Label from "@/components/Forms/Label";
import Button from "@/components/Forms/Button";
import InputError from "@/components/Forms/InputError";
import Link from "next/link";

const Register = () => {
    const router = useRouter();

    const { register } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/login",
    });

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
    const [errors, setErrors] = useState<{
        name?: string[];
        email?: string[];
        password?: string[];
    }>({});

    const submitForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        await register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        });
    };

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <GuestLayout>
                <div className="bg-base-1 d-flex align-items-start align-items-lg-center flex-fill">
                    <div className="container h-100 py-6">
                        <div className="text-center d-block d-lg-none">
                            <h1 className="h2 mb-3 d-inline-block">Register</h1>
                            <div className="m-auto">
                                <p className="text-muted font-weight-normal font-size-lg mb-0">
                                    Join us.
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
                                                        <Label htmlFor="i-name">Name</Label>
                                                        <Input
                                                            id="i-name"
                                                            type="text"
                                                            className={`form-control ${
                                                                errors.name ? "is-invalid" : ""
                                                            }`}
                                                            onChange={(
                                                                event: React.ChangeEvent<HTMLInputElement>
                                                            ): void => setName(event.target.value)}
                                                            name="name"
                                                            value={name}
                                                            autoFocus
                                                        />
                                                        <InputError message={errors.name} />
                                                    </div>
                                                    <div className="form-group">
                                                        <Label htmlFor="i-email">
                                                            Email address
                                                        </Label>
                                                        <Input
                                                            id="i-email"
                                                            type="text"
                                                            className={`form-control ${
                                                                errors.email ? "is-invalid" : ""
                                                            }`}
                                                            onChange={(
                                                                event: React.ChangeEvent<HTMLInputElement>
                                                            ): void => setEmail(event.target.value)}
                                                            name="email"
                                                            value={email}
                                                        />
                                                        <InputError message={errors.email} />
                                                    </div>
                                                    <div className="form-group">
                                                        <Label htmlFor="i-password">Password</Label>
                                                        <Input
                                                            id="i-password"
                                                            type="password"
                                                            className={`form-control ${
                                                                errors.password ? "is-invalid" : ""
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
                                                    <div className="form-group">
                                                        <Label htmlFor="i-password-confirmation">
                                                            Password confirmation
                                                        </Label>
                                                        <Input
                                                            id="i-password-confirmation"
                                                            type="password"
                                                            className={`form-control ${
                                                                errors.password ? "is-invalid" : ""
                                                            }`}
                                                            onChange={(
                                                                event: React.ChangeEvent<HTMLInputElement>
                                                            ): void =>
                                                                setPasswordConfirmation(
                                                                    event.target.value
                                                                )
                                                            }
                                                            name="password_confirmation"
                                                            value={passwordConfirmation}
                                                        />
                                                        <InputError message={errors.password} />
                                                    </div>
                                                    <Button className="btn btn-block btn-primary py-2">
                                                        Register
                                                    </Button>
                                                </form>
                                            </div>
                                            <div className="card-footer bg-base-2 border-0">
                                                <div className="text-center text-muted my-2">
                                                    Already have an account?
                                                    <Link
                                                        href="/login"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        Login
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7 bg-dark d-none d-lg-flex flex-fill background-size-cover background-position-center">
                                            <div className="card-body p-lg-5 d-flex flex-column flex-fill position-absolute top-0 right-0 bottom-0 left-0">
                                                <div className="d-flex align-items-center d-flex flex-fill">
                                                    <div className="text-light ml-5">
                                                        <div className="h2 font-weight-bold">
                                                            Register
                                                        </div>
                                                        <div className="font-size-lg font-weight-medium">
                                                            Join us.
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

export default Register;
