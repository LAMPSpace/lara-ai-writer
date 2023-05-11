import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";
import moment from "moment";

export type TimeTooltipProps = {
    placement?: Placement;
    time: string;
    color?: string | null;
}

const TimeTooltip = ({ placement, time, color }: TimeTooltipProps) => {
    return (
        <OverlayTrigger
            placement={placement ? placement : 'auto'}
            overlay={
                <Tooltip id={`tooltip`}>
                    {moment(time).format('LLL')}
                </Tooltip>
            }
        >
            <span className="d-flex align-content-center"
                style={{ color: color ? color : "black" }}
            >
                {moment(time).fromNow()}
            </span>
        </OverlayTrigger>
    );
}

export default TimeTooltip;