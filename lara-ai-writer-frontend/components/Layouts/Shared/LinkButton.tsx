import Link from "next/link";
import { IconType } from "react-icons";
import { MdChevronRight } from "react-icons/md";

export type LinkButtonInformation = {
    buttonIcon: IconType | null;
    iconColor: string | null;
    title: string;
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

const LinkButton = (
    { item }: LinkButtonProps) => {
    return (
        <Link href={item.buttonLink}
            className={"btn " + item.buttonType + " d-flex align-items-center"}
            style={{ height: item.height, backgroundColor: item.buttonBackgroundColor }}>
            <span className="d-flex flex-row align-items-center">
                {item.buttonIcon &&
                    <>
                        {item.iconColor === null && <item.buttonIcon
                            className="fill-current mr-1 p-1"
                            style={{
                                height: item.height / 2,
                                width: item.height / 2
                            }}
                        />}
                        {item.iconColor !== null && <item.buttonIcon
                            className="fill-current mr-1 p-1"
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
                <span style={{ fontSize: item.fontSize }}>{item.title}</span>
            </span>
            <span className="d-flex flex-row-reverse align-items-center ml-auto">
                {item.rightArrow && <MdChevronRight className="fill-current width-6 height-6" />}
            </span>
        </Link>
    );
};

export default LinkButton;