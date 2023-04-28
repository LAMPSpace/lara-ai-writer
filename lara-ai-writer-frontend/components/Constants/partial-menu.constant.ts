import { ConfirmModalInformation } from "../Layouts/Shared/ConfirmModal";
import { LinkButtonInformation } from "../Layouts/Shared/LinkButton";

const partialItemHeight = 40;

const partialItemFontSize = 14;

type PartialLinkButtons = {
    [key: string]: LinkButtonInformation
}

export const partialLinkButtons: PartialLinkButtons = {
    'edit': {
        icon: {
            iconName: 'MdEdit',
            iconColor: null,
            iconBackground: false
        },
        title: 'Edit',
        titleColor: "",
        rightArrow: false,
        buttonType: '',
        buttonLink: '/edit',
        buttonBackgroundColor: '',
        height: partialItemHeight,
        fontSize: partialItemFontSize
    },
    'document': {
        icon: {
            iconName: 'MdEditDocument',
            iconColor: null,
            iconBackground: false
        },
        title: 'Document',
        titleColor: "",
        rightArrow: false,
        buttonType: '',
        buttonLink: '/document',
        buttonBackgroundColor: '',
        height: partialItemHeight,
        fontSize: partialItemFontSize
    },
    'view': {
        icon: {
            iconName: 'MdOutlinePreview',
            iconColor: null,
            iconBackground: false
        },
        title: 'View',
        titleColor: "",
        rightArrow: false,
        buttonType: '',
        buttonLink: '/view',
        buttonBackgroundColor: '',
        height: partialItemHeight,
        fontSize: partialItemFontSize
    },
    'invoice': {
        icon: {
            iconName: 'FaFileInvoiceDollar',
            iconColor: null,
            iconBackground: false
        },
        title: 'Invoice',
        titleColor: "",
        rightArrow: false,
        buttonType: '',
        buttonLink: '/invoice',
        buttonBackgroundColor: '',
        height: partialItemHeight,
        fontSize: partialItemFontSize
    },
    'download': {
        icon: {
            iconName: 'MdOutlineFileDownload',
            iconColor: null,
            iconBackground: false
        },
        title: 'Download',
        titleColor: "",
        rightArrow: false,
        buttonType: '',
        buttonLink: '/download',
        buttonBackgroundColor: '',
        height: partialItemHeight,
        fontSize: partialItemFontSize
    }
};

type PartialConfirmModals = {
    [key: string]: ConfirmModalInformation
}

export const partialDestroyConfirmModals: PartialConfirmModals = {
    'delete': {
        icon: {
            iconName: 'MdOutlineDelete',
            iconColor: 'danger',
            iconBackground: false
        },
        text: 'Delete',
        textColor: 'danger',
        height: partialItemHeight,
        fontSize: partialItemFontSize,
        title: 'Delete',
        content: 'Do you want to delete this user?',
        confirmText: 'Delete',
        confirmButtonColor: 'danger',
        cancelText: 'Cancel'
    },
    'disable': {
        icon: {
            iconName: 'MdOutlineDisabledByDefault',
            iconColor: 'danger',
            iconBackground: false
        },
        text: 'Disable',
        textColor: 'danger',
        height: partialItemHeight,
        fontSize: partialItemFontSize,
        title: 'Disable',
        content: 'Do you want to disable this user?',
        confirmText: 'Disable',
        confirmButtonColor: 'danger',
        cancelText: 'Cancel'
    }
};

export const partialWarningConfirmModals: PartialConfirmModals = {
    'favorite': {
        icon: {
            iconName: 'MdStarOutline',
            iconColor: 'black',
            iconBackground: false
        },
        text: 'Favorite',
        textColor: 'black',
        height: partialItemHeight,
        fontSize: partialItemFontSize,
        title: 'Favorite',
        content: 'Do you want to add this item to your favorites?',
        confirmText: 'Favorite',
        confirmButtonColor: 'warning',
        cancelText: 'Cancel'
    },
};