import { FilterFields } from "@/components/Layouts/Shared/Table/Filter";

export const DOCUMENTS_FEATURE_BUTTONS: string[] = [
    'new'
];

export const DOCUMENTS_PARTIAL_MENU = [
    'edit',
    'view',
    'favorite',
    'delete',
];

export const DOCUMENTS_TEMPLATES_FONT_SIZE = 12;

export const DOCUMENTS_FILTER_FIELDS: FilterFields[] = [
    {
        name: 'search-by',
        title: 'Search by',
        items: [
            {
                title: 'Name',
                value: 'name'
            },
            {
                title: 'Result',
                value: 'result'
            }
        ]
    },
    {
        name: 'favorite',
        title: 'Favorite',
        items: [
            {
                title: 'All',
                value: 'all'
            },
            {
                title: 'No',
                value: 'no'
            },
            {
                title: 'Yes',
                value: 'yes'
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