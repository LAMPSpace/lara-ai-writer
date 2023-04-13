import { backgroundOpacity, colorTheme } from "../Constants/theme-color.constant"

export const getColorCode = (color?: string) => {
    let key = (color && Object.keys(colorTheme).includes(color)) ? color : 'black';
    return colorTheme[key];
}

export const getIconBackgroundColor = (color: string | null) => {
    return color && color !== null ? getColorCode(color) + backgroundOpacity : 'white';
}