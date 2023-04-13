import Router from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DynamicIcon from "./DynamicIcon";

export type Menu = {
    name: string;
    link: string;
    submenu: Menu[];
};

type SidebarProps = {
    menuList: Menu[];
};

const Sidebar = ({ menuList }: SidebarProps) => {
    const router = useRouter();

    const [activeMenu, setActiveMenu] = useState<string>("");
    const [activeSubmenu, setActiveSubmenu] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (link: string) => {
        console.log(link);
        if (link === activeSubmenu) {
            setActiveSubmenu("");
        } else {
            setActiveSubmenu(link);
        }
    };

    useEffect(() => {
        const path = Router.pathname;
        const menu = menuList.find((menu) => menu.link === path);
        if (menu) {
            setActiveMenu(menu.link);
            setActiveSubmenu("");
        } else {
            const submenu = menuList.find((menu) =>
                menu.submenu.find((submenu) => submenu.link === path)
            );
            if (submenu) {
                setActiveMenu(submenu.link);
                setActiveSubmenu(path);
            }
        }
    }, [menuList]);

    const handleMenuClick = (link: string) => {
        const menu = menuList.find((menu) => menu.link === link);
        if (menu) {
            if (menu.submenu.length > 0) {
                const submenu = menu.submenu.find((submenu) => submenu.link === activeSubmenu);
                if (submenu) {
                    setActiveMenu(link);
                    setActiveSubmenu(activeSubmenu);
                } else {
                    toggleSubmenu(link);
                }
            } else {
                setActiveMenu(link);
                setActiveSubmenu("");
                router.push(link);
            }
        }
    };

    return (
        <div className="nav d-block text-truncate">
            {menuList.map((menu, index) => (
                <div key={index}>
                    <li className="nav-item">
                        <a
                            className={`nav-link d-flex px-4 ${menu.submenu.length > 0
                                ? "collapsed"
                                : menu.link === activeMenu
                                    ? "active"
                                    : ""
                                }`}
                            onClick={() => handleMenuClick(menu.link)}
                            role="button"
                        >
                            <span className="sidebar-icon d-flex align-items-center">
                                <div className="mr-3">
                                    <DynamicIcon iconName={menu.name.toLowerCase()} iconBackground={false} iconColor={null} />
                                </div>
                            </span>
                            <span className="flex-grow-1 text-truncate">{menu.name}</span>
                            {menu.submenu.length > 0 && (
                                <span className="d-flex align-items-center ml-auto sidebar-expand">
                                    {menu.link === activeSubmenu ? (
                                        <DynamicIcon iconName={'expand-less'} iconBackground={false} iconColor={null} />
                                    ) : (
                                        <DynamicIcon iconName={'expand-more'} iconBackground={false} iconColor={null} />
                                    )}
                                </span>
                            )}
                        </a>
                    </li>
                    {menu.submenu.length > 0 && (
                        <div
                            className={`collapse submenu ${menu.link === activeSubmenu ? "show" : ""
                                } ${menu.submenu.find((submenu) => submenu.link === activeSubmenu)
                                    ? "show"
                                    : ""
                                } ${isMenuOpen ? "show" : ""}`}
                            id={`submenu-${index}`}
                        >
                            {menu.submenu.map((submenu, index) => (
                                <Link
                                    key={`submenu-${index}`}
                                    className={`nav-link px-4 d-flex text-truncate ${submenu.link === activeSubmenu ? "active" : ""
                                        } `}
                                    href={submenu.link}
                                >
                                    <span className="sidebar-icon d-flex align-items-center">
                                        <DynamicIcon iconName={submenu.name.toLowerCase()} iconBackground={false} iconColor={null} />
                                    </span>
                                    <span className="flex-grow-1 text-truncate">
                                        {submenu.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
