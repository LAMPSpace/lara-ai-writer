import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";
import DynamicIcon from "./DynamicIcon";

export type CustomTooltipProps = {
    placement?: Placement;
    iconName?: string;
    content: string;
    color?: string;
}

const CustomTooltip = ({ placement, iconName, content, color }: CustomTooltipProps) => {
    return (
        <OverlayTrigger
            placement={placement ? placement : 'auto'}
            overlay={
                <Tooltip id={`tooltip`}>
                    {content}
                </Tooltip>
            }
        >
            <span className="d-flex align-content-center ml-2">
                <DynamicIcon iconName={iconName ? iconName : 'tooltip'} iconBackground={false} iconColor={color ? color : null} />
            </span>
        </OverlayTrigger>
    );
}

export default CustomTooltip;