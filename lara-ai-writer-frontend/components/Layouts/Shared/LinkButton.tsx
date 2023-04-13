import Link from "next/link";
import { IconType } from "react-icons";
import { MdChevronRight } from "react-icons/md";

export type LinkButtonInformation = {
    buttonIcon: IconType | null;
    iconColor: string | null;       //Hex color
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

    const getMargin = () => {
        return item.buttonIcon !== null && item.title !== '' ? ' mr-1' : '';
    }

    return (
        <Link href={item.buttonLink}
            className={"btn " + item.buttonType + " d-flex align-items-center w-100"}
            style={{ height: item.height, backgroundColor: item.buttonBackgroundColor }}>
            <span className="d-flex flex-row align-items-center">
                {item.buttonIcon &&
                    <>
                        {item.iconColor === null && <item.buttonIcon
                            className={"fill-current" + getMargin()}
                            style={{
                                height: item.height / 2,
                                width: item.height / 2
                            }}
                        />}
                        {item.iconColor !== null && <item.buttonIcon
                            className={"fill-current p-1" + getMargin()}
                            style={{
                                color: item.iconColor,
                                backgroundColor: item.iconColor + "20",
                                borderRadius: 8,
                                height: item.height / 2,
                                width: item.height / 2
                            }}
                        />}
                    </>

                }
                <span style={{ fontSize: item.fontSize, color: item.titleColor }}>{item.title}</span>
            </span>
            <span className="d-flex flex-row-reverse align-items-center ml-auto">
                {item.rightArrow && <MdChevronRight className="fill-current width-6 height-6" />}
            </span>
        </Link>
    );
};

export default LinkButton;