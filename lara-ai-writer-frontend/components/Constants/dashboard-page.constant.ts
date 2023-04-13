import LinkButton from "../Layouts/Shared/LinkButton";
import OverviewCard from "../Layouts/Shared/OverviewCard";

type CategoryContent = {
    itemType: any;
    perRow: number;
    items: any[]
};

type CategoryItem = {
    name: string;
    title: string;
    buttons: string[];
    content: CategoryContent;
};

export const DASHBOARD_FEATURE_BUTTONS: string[] = [
    'new-document',
    'plans'
];

export const DASHBOARD_CATEGORIES: CategoryItem[] = [
    {
        name: 'overview',
        title: 'Overview',
        buttons: [],
        content: {
            itemType: OverviewCard,
            perRow: 4,
            items: [
                {
                    name: "documents",
                    title: "Documents",
                    content: "26",
                    tooltip: ""
                },
                {
                    name: "words",
                    title: "Words",
                    content: "4,885",
                    tooltip: ""
                },
                {
                    name: "images",
                    title: "Images",
                    content: "13",
                    tooltip: ""
                },
                {
                    name: "timeSaved",
                    title: "Time saved",
                    content: "2h 2m",
                    tooltip: "This number is calculated for an average of :words words per minute."
                }
            ]
        }
    },
    {
        name: 'templates',
        title: 'Templates',
        buttons: [
            'view-all'
        ],
        content: {
            itemType: LinkButton,
            perRow: 3,
            items: [
                {
                    icon: {
                        iconName: 'RiArticleFill',
                        iconColor: 'green',
                        iconBackground: true
                    },
                    title: 'Article',
                    titleColor: '',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    icon: {
                        iconName: 'MdDraw',
                        iconColor: 'darkblue',
                        iconBackground: true
                    },
                    title: 'Freestyle',
                    titleColor: '',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    icon: {
                        iconName: 'BsJournalText',
                        iconColor: 'green',
                        iconBackground: true
                    },
                    title: 'Blog post',
                    titleColor: '',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    icon: {
                        iconName: 'MdViewHeadline',
                        iconColor: 'red',
                        iconBackground: true
                    },
                    title: 'Headline',
                    titleColor: '',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    icon: {
                        iconName: 'RiAdvertisementFill',
                        iconColor: 'darkblue',
                        iconBackground: true
                    },
                    title: 'Advertisement',
                    titleColor: '',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    icon: {
                        iconName: 'MdDescription',
                        iconColor: 'red',
                        iconBackground: true
                    },
                    title: 'Meta description',
                    titleColor: '',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
            ]
        }
    },
];