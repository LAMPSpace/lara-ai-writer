import Link from "next/link";
import DynamicIcon, { DynamicIconProps } from "./DynamicIcon";
import { getMargin } from "@/helpers/text.helper";

export type LinkButtonInformation = {
    icon: DynamicIconProps | null;
    title: string;
    titleColor: string | "",
    rightArrow: boolean;
    buttonType: string;
    buttonLink: string;
    buttonBackgroundColor: string | "";
    height: number;
    fontSize: number;
};

type LinkButtonProps = {
    item: LinkButtonInformation
};

const LinkButton = ({ item }: LinkButtonProps) => {

    return item && (
        <Link href={item.buttonLink}
            className={"btn " + item.buttonType + " d-flex align-items-center w-100"}
            style={{ height: item.height, backgroundColor: item.buttonBackgroundColor }}>
            <span className="d-flex flex-row align-items-center">
                {item.icon &&
                    <DynamicIcon iconName={item.icon.iconName} iconColor={item.icon.iconColor} iconSize={item.height / 3} iconBackground={item.icon.iconBackground} />
                }
                <span className={getMargin(item.icon, item.title)} style={{ fontSize: item.fontSize, color: item.titleColor }}>{item.title}</span>
            </span>
            <span className={"d-flex flex-row-reverse align-items-center ml-auto"}>
                {item.rightArrow && <DynamicIcon iconName={'right-arrow'} iconColor={null} iconBackground={false} iconSize={item.height / 3} />}
            </span>
        </Link>
    );
};

export default LinkButton;