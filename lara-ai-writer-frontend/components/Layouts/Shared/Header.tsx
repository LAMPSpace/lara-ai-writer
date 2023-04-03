import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="header" className="header sticky-top shadow bg-base-0 z-1025">
            <div className="container">
                <nav
                    className={`navbar navbar-expand-lg navbar-light ${
                        isMenuOpen ? "show" : ""
                    } px-0 py-3`}
                >
                    <Link href="/dashboard" className="navbar-brand p-0">
                        <div className="logo h-100">LAiMP</div>
                    </Link>
                    <button
                        className="navbar-toggler border-0 p-0"
                        type="button"
                        aria-controls="header-navbar"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
                        id="header-navbar"
                    >
                        <ul className="navbar-nav pt-2 p-lg-0 ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="/login" role="button">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link
                                    className="btn btn-outline-primary"
                                    href="/register"
                                    role="button"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
