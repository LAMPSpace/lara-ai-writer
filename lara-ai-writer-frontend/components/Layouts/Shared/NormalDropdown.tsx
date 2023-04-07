import { Dropdown, ButtonGroup } from "react-bootstrap";

interface NormalDropdownItem {
    value: string | number;
    title: string;
}

export type NormalDropdownProps = {
    name: string;
    title: string;
    items: NormalDropdownItem[];
}

const NormalDropdown = ({ name, title, items }: NormalDropdownProps) => {
    return (
        <Dropdown as={ButtonGroup} autoClose="outside" className="w-100">
            <Dropdown.Toggle id="dropdown-split-basic" bsPrefix="p-0" className="rounded-right bg-white w-100 text-left border-secondary text-secondary p-1">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.length > 0 && items.map(item => {
                    return (
                        <Dropdown.Item key={name + item.value}>
                            {item.title}
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NormalDropdown;