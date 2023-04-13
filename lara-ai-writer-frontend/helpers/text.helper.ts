import { DynamicIconProps } from "@/components/Layouts/Shared/DynamicIcon";

export const capitalizeText = (text: string) => {
    return text.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

export const getMargin = (icon: DynamicIconProps | null, text: string) => {
    return icon !== null && text !== '' ? 'ml-1' : '';
}