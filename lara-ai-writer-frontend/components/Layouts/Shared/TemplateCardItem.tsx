import Link from "next/link";
import DynamicIcon, { DynamicIconProps } from "./DynamicIcon";

export type TemplateCardItemInformation = {
    icon: DynamicIconProps | null;
    title: string;
    content: string;
    titleFontSize: number;
    contentFontSize: number;
};

type TemplateCardItemProps = {
    templateCardItemInformation: TemplateCardItemInformation
};

const TemplateCardItem = ({ templateCardItemInformation }: TemplateCardItemProps) => {
    return (
        <div className="card border-0 h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <div className="row">
                    <div className="col">
                        <div className="d-flex position-relative align-items-center justify-content-left flex-shrink-0">
                            {templateCardItemInformation.icon && <DynamicIcon
                                iconName={templateCardItemInformation.icon.iconName}
                                iconColor={templateCardItemInformation.icon.iconColor}
                                iconSize={templateCardItemInformation.icon.iconSize}
                                iconBackground={templateCardItemInformation.icon.iconBackground} />
                            }
                        </div>
                    </div>
                </div>

                <Link href="/templates" className="text-dark font-weight-bold stretched-link text-decoration-none text-truncate mt-3 mb-1"
                    style={{ fontSize: templateCardItemInformation.titleFontSize }}
                >{templateCardItemInformation.title}</Link>

                <div className="text-muted" style={{ fontSize: templateCardItemInformation.contentFontSize }}>
                    {templateCardItemInformation.content}
                </div>
            </div>
        </div>
    );
}

export default TemplateCardItem;