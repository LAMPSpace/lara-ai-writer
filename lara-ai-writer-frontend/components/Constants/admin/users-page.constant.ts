import { LinkButtonInformation } from "@/components/Layouts/Shared/LinkButton";
import { FilterFields } from "@/components/Layouts/Shared/Table/Filter";
import { StatusColor } from "../theme-color.constant";

export const ADMIN_USERS_FEATURE_BUTTONS: LinkButtonInformation[] = [
    {
        buttonIcon: null,
        iconColor: null,
        title: 'New',
        titleColor: '',
        rightArrow: false,
        buttonType: 'btn-primary',
        buttonLink: '/users/create',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
];



export const ADMIN_USERS_STATUS_COLORS: StatusColor = {
    'active': 'success',
    'inactive': 'danger',
};

export const ADMIN_USERS_STATUS_FONT_SIZE = 12;

export const ADMIN_USERS_FILTER_FIELDS: FilterFields[] = [
    {
        name: 'search-by',
        title: 'Search by',
        items: [
            {
                title: 'Name',
                value: 'name'
            },
            {
                title: 'Email',
                value: 'email'
            }
        ]
    },
    {
        name: 'role',
        title: 'Role',
        items: [
            {
                title: 'All',
                value: 'all'
            },
            {
                title: 'User',
                value: 'user'
            },
            {
                title: 'Admin',
                value: 'admin'
            }
        ]
    },
    {
        name: 'sort-by',
        title: 'Sort by',
        items: [
            {
                title: 'Date created',
                value: 'date-created'
            },
            {
                title: 'Name',
                value: 'name'
            },
            {
                title: 'Email',
                value: 'email'
            }
        ]
    },
    {
        name: 'sort',
        title: 'Sort',
        items: [
            {
                title: 'Descending',
                value: 'desc'
            },
            {
                title: 'Ascending',
                value: 'asc'
            },
        ]
    },
    {
        name: 'result-per-page',
        title: 'Result per page',
        items: [
            {
                title: '10',
                value: 10
            },
            {
                title: '25',
                value: 25
            },
            {
                title: '50',
                value: 50
            },
            {
                title: '100',
                value: 100
            },
        ]
    }
];

export const ADMIN_USERS_PARTIAL_MENU = [
    'edit',
    'delete',
];