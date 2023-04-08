import { ConfirmModalInformation } from "../Layouts/Shared/ConfirmModal";
import { LinkButtonInformation } from "../Layouts/Shared/LinkButton";
import { MdEdit, MdEditDocument, MdOutlinePreview, MdOutlineFileDownload, MdOutlineDelete, MdOutlineDisabledByDefault } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { colorTheme } from "./theme-color.constant";

const partialItemHeight = 40;

const partialItemFontSize = 14;

type PartialLinkButtons = {
    [key: string]: LinkButtonInformation
}

export const partialLinkButtons: PartialLinkButtons = {
    'edit': {
        buttonIcon: MdEdit,
        iconColor: null,
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
        buttonIcon: MdEditDocument,
        iconColor: null,
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
        buttonIcon: MdOutlinePreview,
        iconColor: null,
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
        buttonIcon: FaFileInvoiceDollar,
        iconColor: null,
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
        buttonIcon: MdOutlineFileDownload,
        iconColor: null,
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

export const partialConfirmModals: PartialConfirmModals = {
    'delete': {
        buttonIcon: MdOutlineDelete,
        text: 'Delete',
        textColor: colorTheme.danger,
        height: partialItemHeight,
        fontSize: partialItemFontSize,
        title: 'Delete',
        content: 'Do you want to delete this user?',
        confirmText: 'Delete',
        cancelText: 'Cancel'
    },
    'disable': {
        buttonIcon: MdOutlineDisabledByDefault,
        text: 'Disable',
        textColor: colorTheme.danger,
        height: partialItemHeight,
        fontSize: partialItemFontSize,
        title: 'Disable',
        content: 'Do you want to disable this user?',
        confirmText: 'Disable',
        cancelText: 'Cancel'
    }
};