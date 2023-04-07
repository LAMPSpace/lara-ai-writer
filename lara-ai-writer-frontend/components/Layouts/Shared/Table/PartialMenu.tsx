import { Dropdown, ButtonGroup } from "react-bootstrap";
import ConfirmModal from "../ConfirmModal";
import LinkButton from "../LinkButton";
import { MdMoreHoriz } from "react-icons/md";
import { partialConfirmModals, partialLinkButtons } from "@/components/Constants/partial-menu.constant";

type PartialMenuProps = {
    partials: string[];
    data?: any;
    index?: number;
}

const PartialMenu = ({ partials, data, index }: PartialMenuProps) => {
    return (
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-split-basic" bsPrefix="p-0" className="rounded border-0 bg-white d-flex align-items-center btn-sm text-primary p-1">
                <MdMoreHoriz className="fill-current width-4 height-4" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="border-none shadow mb-5 bg-white rounded">
                {Object.keys(partialLinkButtons).map(linkButton => {
                    return partials.includes(linkButton) ? (
                        <Dropdown.Item className="py-1 px-0">
                            <LinkButton item={partialLinkButtons[linkButton]} />
                        </Dropdown.Item>
                    ) : (<></>);
                })}
                <Dropdown.Divider />
                {Object.keys(partialConfirmModals).map(confirmModal => {
                    return partials.includes(confirmModal) ? (
                        <Dropdown.Item className="py-1 px-0">
                            <ConfirmModal item={partialConfirmModals[confirmModal]} />
                        </Dropdown.Item>
                    ) : (<></>);
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default PartialMenu;