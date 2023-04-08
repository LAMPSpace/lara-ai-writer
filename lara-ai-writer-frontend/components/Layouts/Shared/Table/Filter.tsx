import { MdFilterAlt } from "react-icons/md";
import { Dropdown, ButtonGroup, Button, Form } from "react-bootstrap";

interface FilterFieldItem {
    value: string | number;
    title: string;
}

export type FilterFields = {
    name: string;
    title: string;
    items: FilterFieldItem[];
}

type FilterProps = {
    filterFields: FilterFields[]
}

const Filter = ({ filterFields }: FilterProps) => {
    return (
        <Dropdown as={ButtonGroup} autoClose="outside" align={'end'}>
            <Dropdown.Toggle id="dropdown-split-basic" bsPrefix="p-0" className="d-flex align-items-center rounded-right p-1" style={{ borderRadius: 'inherit' }}>
                <MdFilterAlt className="fill-current width-4 height-4" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-2">
                <Dropdown.Header className="p-1">
                    <div className="d-flex align-items-center">
                        <div className="font-weight-bold">Filters</div>
                        <button className="ml-auto border-none bg-white text-secondary">Reset</button>
                    </div>
                </Dropdown.Header>
                <div className="max-height-96 overflow-auto">
                    {
                        filterFields.length > 0 && filterFields.map(filterField => {
                            return (
                                <div className="w-100 p-1" key={'filter_field_' + filterField.name}>
                                    <p className="my-1">{filterField.title}</p>
                                    <Form.Select className="w-100 custom-select custom-select-sm">
                                        {filterField.items.length > 0 && filterField.items.map(item => {
                                            return (
                                                <option value={item.value} key={'filter_field_' + filterField.name + "_" + item.value}>{item.title}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </div>
                            );
                        })
                    }
                </div>
                <Dropdown.Divider />
                <div className="py-1">
                    <Button className="w-100">Search</Button>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Filter