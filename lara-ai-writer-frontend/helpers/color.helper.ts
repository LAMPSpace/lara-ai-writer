import { colorTheme, backgroundOpacity } from "@/components/Constants/theme-color.constant";

export const getColorCode = (color?: string | null) => {
    let key = (color && Object.keys(colorTheme).includes(color)) ? color : '';
    return colorTheme[key];
}

export const getIconBackgroundColor = (color: string | null) => {
    return color && color !== null ? getColorCode(color) + backgroundOpacity : 'transparent';
}