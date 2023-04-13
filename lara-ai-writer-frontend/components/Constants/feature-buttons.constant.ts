import { LinkButtonInformation } from "../Layouts/Shared/LinkButton";

type FeatureButtons = {
    [key: string]: LinkButtonInformation;
}

export const FEATURE_BUTTONS: FeatureButtons = {
    'new': {
        icon: null,
        title: 'New',
        titleColor: '',
        rightArrow: false,
        buttonType: 'btn-primary',
        buttonLink: '',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
    'new-document': {
        icon: {
            iconName: 'plus',
            iconColor: null,
            iconBackground: false
        },
        title: 'New document',
        titleColor: '',
        rightArrow: true,
        buttonType: 'btn-primary',
        buttonLink: '/documents',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
    'plans': {
        icon: {
            iconName: 'plans',
            iconColor: null,
            iconBackground: false
        },
        title: 'Plans',
        titleColor: '',
        rightArrow: false,
        buttonType: 'btn-outline-primary',
        buttonLink: '/plans',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
    'view-all': {
        icon: null,
        title: 'View all',
        titleColor: '',
        rightArrow: true,
        buttonType: 'btn-outline-primary',
        buttonLink: '',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    },
};