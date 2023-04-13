import { Dropdown, ButtonGroup } from "react-bootstrap";
import ConfirmModal from "../ConfirmModal";
import LinkButton from "../LinkButton";
import { MdMoreHoriz } from "react-icons/md";
import { partialDestroyConfirmModals, partialWarningConfirmModals, partialLinkButtons } from "@/components/Constants/partial-menu.constant";

type PartialMenuProps = {
    partials: string[];
    data?: any;
    index?: number;
}

const PartialMenu = ({ partials, data, index }: PartialMenuProps) => {
    const warningConfirmModals = Object.keys(partialWarningConfirmModals).filter(key => partials.includes(key));
    const destroyConfirmModals = Object.keys(partialDestroyConfirmModals).filter(key => partials.includes(key));

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
                {warningConfirmModals.length > 0 &&
                    <>
                        <Dropdown.Divider />
                        {warningConfirmModals.map(confirmModal => {
                            return (
                                <Dropdown.Item className="py-1 px-0">
                                    <ConfirmModal item={partialWarningConfirmModals[confirmModal]} />
                                </Dropdown.Item>
                            );
                        })}
                    </>
                }
                {destroyConfirmModals.length > 0 &&
                    <>
                        <Dropdown.Divider />
                        {destroyConfirmModals.map(confirmModal => {
                            return (
                                <Dropdown.Item className="py-1 px-0">
                                    <ConfirmModal item={partialDestroyConfirmModals[confirmModal]} />
                                </Dropdown.Item>
                            );
                        })}
                    </>
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default PartialMenu;