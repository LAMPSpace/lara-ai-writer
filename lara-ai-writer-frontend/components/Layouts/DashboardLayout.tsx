import DashboardHeader from "./Shared/DashboardHeader";
import Footer from "./Shared/Footer";
import { useState } from "react";

const DashboardLayout = ({ user, children }: any) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <DashboardHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="d-flex flex-column flex-fill content">
                <nav className={`slide-menu shadow bg-base-0 navbar navbar-light p-0 d-flex flex-column z-1030 ${isMenuOpen ? 'active' : ''}`} id="slide-menu">
                    <div className="sidebar-section flex-grow-1 d-flex flex-column w-100">
                        <div>
                            <div className="pl-4 py-3 d-flex align-items-center">
                                <a href="{{ route('dashboard') }}" className="navbar-brand p-0">
                                    <div className="logo">
                                        LAiMP
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="py-3 pl-4 pr-0 font-weight-medium text-muted text-uppercase flex-grow-1">Menu</div>
                        </div>

                        <div className="sidebar-section flex-grow-1 overflow-auto sidebar">
                        </div>

                        <div className="sidebar sidebar-footer">
                            <div className="py-3 pl-4 pr-0 d-flex align-items-center" aria-expanded="true">
                                <a href="#" className="d-flex align-items-center overflow-hidden text-secondary text-decoration-none flex-grow-1">
                                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" className="flex-shrink-0 rounded-circle width-10 height-10 mr-3" alt="Avatar" />

                                    <div className="d-flex flex-column text-truncate">
                                        <div className="font-weight-medium text-dark text-truncate">
                                            { user.name }
                                        </div>

                                        <div className="small font-weight-medium">
                                            Account
                                        </div>
                                    </div>
                                </a>

                                <a 
                                    className="py-2 px-4 d-flex flex-shrink-0 align-items-center text-secondary text-decoration-none"
                                    href="{{ route('logout') }}"
                                    data-tooltip="true" title="{{ __('Logout') }}"
                                >
                                    <span className="material-symbols-outlined">logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                {children}
                <Footer />
            </div>
        </>
    );
};

export default DashboardLayout;