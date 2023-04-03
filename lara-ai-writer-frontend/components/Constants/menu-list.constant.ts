import {
    MdDashboard,
    MdWidgets,
    MdViewTimeline,
    MdImage,
    MdSettings,
    MdSettingsSuggest,
    MdOutlineSettings,
} from "react-icons/md";
import { Menu } from "../Layouts/Shared/Sidebar";

export const USER_MENU_LIST: Menu[] = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        link: "/dashboard",
        submenu: [],
    },
    {
        name: "Templates",
        icon: MdWidgets,
        link: "/templates",
        submenu: [],
    },
    {
        name: "Documents",
        icon: MdViewTimeline,
        link: "/documents",
        submenu: [],
    },
    {
        name: "Images",
        icon: MdImage,
        link: "/images",
        submenu: [],
    },
];

export const ADMIN_MENU_LIST: Menu[] = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        link: "/admin",
        submenu: [],
    },
    {
        name: "Settings",
        icon: MdSettings,
        link: "/admin/settings",
        submenu: [
            {
                name: "General",
                icon: MdSettingsSuggest,
                link: "/admin/settings/general",
                submenu: [],
            },
            {
                name: "Advanced",
                icon: MdOutlineSettings,
                link: "/admin/settings/advanced",
                submenu: [],
            },
        ],
    },
];
