import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";
import DynamicIcon from "./DynamicIcon";

export type CustomTooltipProps = {
    placement?: Placement;
    iconName?: string;
    content: string;
    color?: string | null;
    iconSize?: number;
    iconBackground?: boolean;
}

const CustomTooltip = ({ placement, iconName, content, color, iconSize, iconBackground }: CustomTooltipProps) => {
    return (
        <OverlayTrigger
            placement={placement ? placement : 'auto'}
            overlay={
                <Tooltip id={`tooltip`}>
                    {content}
                </Tooltip>
            }
        >
            <span className="d-flex align-content-center">
                <DynamicIcon iconName={iconName ? iconName : 'tooltip'} iconBackground={iconBackground ? iconBackground : false} iconColor={color ? color : null} iconSize={iconSize} />
            </span>
        </OverlayTrigger>
    );
}

export default CustomTooltip;