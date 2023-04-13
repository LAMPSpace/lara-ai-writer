import { LoadableComponent } from "next/dynamic";
import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons/lib";
import { iconList } from "@/components/Constants/default-icon.constant";
import { getColorCode, getIconBackgroundColor } from "@/helpers/color.helper";

export interface DynamicIconProps {
    iconName: string;
    iconColor: string | null;
    iconSize?: number;
    iconBackground: boolean;
}

const getIconName = (icon: string): string => {
    return icon.split('-').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

const DynamicIcon = ({ iconName, iconColor, iconSize, iconBackground }: DynamicIconProps) => {
    const iconProps: IconBaseProps = { size: iconSize };
    const name = Object.keys(iconList).includes(iconName) ? iconList[iconName] : getIconName(iconName);
    const lib = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();
    const ElementIcon: LoadableComponent = loadable(() => import(`react-icons/${lib}/index.js`), {
        resolveComponent: (el: JSX.Element) => el[name as keyof JSX.Element]
    });
    return (
        <div className="d-flex align-items-center justify-content-center p-1"
            style={{
                color: getColorCode(iconColor),
                backgroundColor: iconBackground ? getIconBackgroundColor(iconColor) : 'transparent',
                borderRadius: 8,
            }}>
            <ElementIcon {...iconProps} />
        </div>
    );
}

export default DynamicIcon;