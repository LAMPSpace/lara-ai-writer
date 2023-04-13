import { LoadableComponent } from "next/dynamic";
import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons/lib";
import { getColorCode, getIconBackgroundColor } from "@/components/Helpers/color.helper";

interface DynamicIconProps {
    iconName: string;
    iconColor: string;
    iconSize: number;
}

const getIconName = (icon: string): string => {
    return icon.split('-').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

const DynamicIcon = ({ iconName, iconColor, iconSize }: DynamicIconProps) => {
    const iconProps: IconBaseProps = { size: iconSize };
    const name = getIconName(iconName);
    const lib = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();
    const ElementIcon: LoadableComponent = loadable(() => import(`react-icons/${lib}/index.js`), {
        resolveComponent: (el: JSX.Element) => el[name as keyof JSX.Element]
    });
    return (
        <div className="d-flex align-items-center justify-content-center p-1"
            style={{
                color: getColorCode(iconColor),
                backgroundColor: getIconBackgroundColor(iconColor),
                borderRadius: 8,
            }}>
            <ElementIcon {...iconProps} />
        </div>
    );
}

export default DynamicIcon;