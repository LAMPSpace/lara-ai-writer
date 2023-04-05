/* eslint-disable @next/next/no-img-element */
import DashboardHeader from "./Shared/DashboardHeader";
import Footer from "./Shared/Footer";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import { MdLogout, MdOutlineAdminPanelSettings, MdSupervisedUserCircle } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";

const DashboardLayout = ({ user, sidebar, children }: any) => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logout } = useAuth({ middleware: "auth" });

    const isAdminRoute = router.pathname.includes("/admin");

    const { logout } = useAuth({ middleware: "auth" });

    return (
        <>
            <DashboardHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="d-flex flex-column flex-fill content">
                <nav
                    className={`slide-menu shadow bg-base-0 navbar navbar-light p-0 d-flex flex-column z-1030 ${
                        isMenuOpen ? "active" : ""
                    }`}
                    id="slide-menu"
                >
                    <div className="sidebar-section flex-grow-1 d-flex flex-column w-100">
                        <div>
                            <div className="pl-4 py-3 d-flex align-items-center">
                                <a href="{{ route('dashboard') }}" className="navbar-brand p-0">
                                    <div className="logo">LAiMP</div>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="py-3 pl-4 pr-0 font-weight-medium text-muted text-uppercase flex-grow-1">
                                Menu
                            </div>
                            {
                                user.role === 'admin' && (
                                    <Link
                                        className="px-4 py-2 text-decoration-none text-secondary"
                                        data-tooltip="true"
                                        title="Dashboard"
                                        role="button"
                                        href={isAdminRoute ? "/dashboard" : "/admin"}
                                    >
                                        <span className="d-flex align-items-center">
                                            {isAdminRoute ? (
                                                <MdSupervisedUserCircle className="fill-current width-4 height-4" />
                                            ) : (
                                                <MdOutlineAdminPanelSettings className="fill-current width-4 height-4" />
                                            )}
                                        </span>
                                    </Link>
                                )
                            }
                        </div>

                        <div className="sidebar-section flex-grow-1 overflow-auto sidebar">
                            {sidebar}
                        </div>

                        <div className="sidebar sidebar-footer">
                            <div
                                className="py-3 pl-4 pr-0 d-flex align-items-center"
                                aria-expanded="true"
                            >
                                <a
                                    href="#"
                                    className="d-flex align-items-center overflow-hidden text-secondary text-decoration-none flex-grow-1"
                                >
                                    <img
                                        src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
                                        className="flex-shrink-0 rounded-circle width-10 height-10 mr-3"
                                        alt="Avatar"
                                    />

                                    <div className="d-flex flex-column text-truncate">
                                        <div className="font-weight-medium text-dark text-truncate">
                                            {user.name}
                                        </div>

                                        <div className="small font-weight-medium">Account</div>
                                    </div>
                                </a>

                                <a
                                    className="py-2 px-4 d-flex flex-shrink-0 align-items-center text-secondary"
                                    href="#"
                                    data-tooltip="true"
                                    title="Logout"
                                    onClick={logout}
                                >
                                    <MdLogout className="fill-current width-4 height-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="bg-base-1 flex-fill">
                    <div className="container py-3 my-3">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default DashboardLayout;
