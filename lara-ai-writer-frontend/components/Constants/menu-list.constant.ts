import { Menu } from "../Layouts/Shared/Sidebar";

export const USER_MENU_LIST: Menu[] = [
    {
        name: "Dashboard",
        link: "/dashboard",
        submenu: [],
    },
    {
        name: "Templates",
        link: "/templates",
        submenu: [],
    },
    {
        name: "Documents",
        link: "/documents",
        submenu: [],
    },
    {
        name: "Images",
        link: "/images",
        submenu: [],
    },
];

export const ADMIN_MENU_LIST: Menu[] = [
    {
        name: "Dashboard",
        link: "/admin",
        submenu: [],
    },
    {
        name: "Settings",
        link: "/admin/settings",
        submenu: [
            {
                name: "General",
                link: "/admin/settings/general",
                submenu: [],
            },
            {
                name: "Advanced",
                link: "/admin/settings/advanced",
                submenu: [],
            },
        ],
    },
    {
        name: "Users",
        link: "/admin/users",
        submenu: [],
    }
];
