import { Tooltip, OverlayTrigger } from "react-bootstrap";
import DynamicIcon from "./DynamicIcon";

type OverviewCardInformation = {
    name: string;
    title: string;
    content: string;
    tooltip: string;
};

type OverviewCardProps = {
    item: OverviewCardInformation
}

const OverviewCard = ({ item }: OverviewCardProps) => {
    return (
        <div className="card border-0 h-100 shadow-sm">
            <div className="card-body d-flex align-items-center">
                <div className="d-flex flex-column justify-content-center flex-grow-1">
                    <div className="d-flex align-items-center text-muted text-truncate mb-1">
                        <div>
                            {item.title}
                        </div>
                        {item.tooltip !== "" &&
                            <OverlayTrigger
                                placement={'auto'}
                                overlay={
                                    <Tooltip id={`tooltip`}>
                                        {item.tooltip}
                                    </Tooltip>
                                }
                            >
                                <span className="d-flex align-content-center ml-2"><DynamicIcon iconName={"tooltip"} iconBackground={false} iconColor={null} /></span>
                            </OverlayTrigger>
                        }
                    </div>
                    <div className="font-weight-bold h4 mb-0">
                        {item.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverviewCard;