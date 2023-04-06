import { IconType } from "react-icons";

export type TemplateCardItemInformation = {
    cardIcon: IconType;
    iconColor: string;
    title: string;
    content: string;
    iconSize: number;
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
                            <div className="position-absolute opacity-10 top-0 right-0 bottom-0 left-0 border-radius-xl"></div>
                            <templateCardItemInformation.cardIcon
                                className="fill-current mr-1 p-1"
                                style={{
                                    color: templateCardItemInformation.iconColor,
                                    backgroundColor: templateCardItemInformation.iconColor + "20",
                                    borderRadius: 8,
                                    height: templateCardItemInformation.iconSize,
                                    width: templateCardItemInformation.iconSize
                                }}
                            />
                        </div>
                    </div>
                </div>

                <a href="/templates" className="text-dark font-weight-bold stretched-link text-decoration-none text-truncate mt-3 mb-1"
                    style={{ fontSize: templateCardItemInformation.titleFontSize }}
                >{templateCardItemInformation.title}</a>

                <div className="text-muted" style={{ fontSize: templateCardItemInformation.contentFontSize }}>
                    {templateCardItemInformation.content}
                </div>
            </div>
        </div>
    );
}

export default TemplateCardItem;