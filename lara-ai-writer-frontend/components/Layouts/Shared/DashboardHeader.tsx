import { useState } from "react";
import Link from "next/link";

type DashboardHeaderProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const DashboardHeader = ({ isMenuOpen, setIsMenuOpen }: DashboardHeaderProps) => {

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div id="header" className="header sticky-top shadow bg-base-0 z-1025 d-lg-none">
                <div className="container-fluid">
                    <nav className="navbar navbar-light px-0 py-3">
                        <Link href="/dashboard" className="navbar-brand p-0">
                            <div className="logo">
                                LAiMP
                            </div>
                        </Link>
                        <button 
                            className="slide-menu-toggle navbar-toggler border-0 p-0"
                            type="button"
                            onClick={toggleMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default DashboardHeader;