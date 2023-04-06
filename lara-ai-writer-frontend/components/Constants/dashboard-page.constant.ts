import LinkButton, { LinkButtonInformation } from "../Layouts/Shared/LinkButton";
import { MdAssignment, MdDraw, MdViewHeadline, MdDescription } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { RiArticleFill, RiAdvertisementFill } from "react-icons/ri";
import { BsJournalText } from "react-icons/bs";
import OverviewCard from "../Layouts/Shared/OverviewCard";

type CategoryContent = {
    itemType: any;
    perRow: number;
    items: any[]
};

type CategoryItem = {
    name: string;
    title: string;
    buttons: LinkButtonInformation[];
    content: CategoryContent;
};

export const DASHBOARD_FEATURE_BUTTONS: LinkButtonInformation[] = [
    {
        buttonIcon: HiPlus,
        iconColor: null,
        title: 'New document',
        rightArrow: true,
        buttonType: 'btn-primary',
        buttonLink: '/documents',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
    {
        buttonIcon: MdAssignment,
        iconColor: null,
        title: 'Plans',
        rightArrow: false,
        buttonType: 'btn-outline-primary',
        buttonLink: '/plans',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
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
            {
                buttonIcon: null,
                iconColor: null,
                title: 'View all',
                rightArrow: true,
                buttonType: 'btn-outline-primary',
                buttonLink: '/templates',
                buttonBackgroundColor: "",
                height: 30,
                fontSize: 10
            },
        ],
        content: {
            itemType: LinkButton,
            perRow: 3,
            items: [
                {
                    buttonIcon: RiArticleFill,
                    iconColor: '#00CC00',
                    title: 'Article',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    buttonIcon: MdDraw,
                    iconColor: '#003366',
                    title: 'Freestyle',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    buttonIcon: BsJournalText,
                    iconColor: '#00CC00',
                    title: 'Blog post',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    buttonIcon: MdViewHeadline,
                    iconColor: '#CC3300',
                    title: 'Headline',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    buttonIcon: RiAdvertisementFill,
                    iconColor: '#111111',
                    title: 'Advertisement',
                    rightArrow: true,
                    buttonType: 'btn',
                    buttonLink: '/templates',
                    buttonBackgroundColor: 'white',
                    height: 80,
                    fontSize: 16
                },
                {
                    buttonIcon: MdDescription,
                    iconColor: '#CC3300',
                    title: 'Meta description',
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