import { LinkButtonInformation } from "../Layouts/Shared/LinkButton";
import { TemplateCategoryInformation } from "../Layouts/Shared/TemplateCategory";

export const TEMPLATES_FEATURE_BUTTONS: LinkButtonInformation[] = [
    {
        buttonIcon: null,
        iconColor: null,
        title: 'New',
        titleColor: '',
        rightArrow: false,
        buttonType: 'btn-primary',
        buttonLink: '/templates',
        buttonBackgroundColor: "",
        height: 40,
        fontSize: 14
    }
];

export const templateCategoryInformation = {
    perRow: 3,
    titleFontSize: 12,
    itemsIconSize: 30,
    itemsTitleFontSize: 16,
    itemsContentFontSize: 14
};

export type TemplateItem = {
    uuid: string;
    category: string;
    color: string;
    name: string;
    icon: string;
    prompt: string;
    description: string;
    route: string;
    views: number;
}

export type TemplateCategoryItems = {
    [key: string]: TemplateCategoryInformation;
}