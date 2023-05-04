import { useState, useEffect } from "react";
import { Dropdown, ButtonGroup, Button, Form } from "react-bootstrap";
import DynamicIcon from "../DynamicIcon";
import { defaultIconMinHeight } from "@/components/Constants/default-icon.constant";

type FilterFieldItem = {
    value: string | number;
    title: string;
}

export type FilterFields = {
    name: string;
    title: string;
    items: FilterFieldItem[];
}

type FilterProps = {
    filterFields: FilterFields[],
    additionalFilterValues: AdditionalFilterValues | null
}

export type FilterValues = {
    [key: string]: string;
}

export type AdditionalFilterValues = {
    key: string;
    value: string;
}

const Filter = ({ filterFields, additionalFilterValues }: FilterProps) => {

    const [filterValues, setFilterValues] = useState<FilterValues>({});

    const handleChangeFilterValues = (key: string, value: string) => {
        let tempFilterValues: FilterValues = { ...filterValues };
        tempFilterValues[key] = value;
        setFilterValues(tempFilterValues);
    }

    const getDefaultFilterValues = () => {
        let defaultFilterValues: FilterValues = {};
        filterFields.forEach(field => {
            defaultFilterValues[field.name] = field.items[0].value.toString();
        });
        setFilterValues(defaultFilterValues);
    }

    const handleApplyFilter = () => {
        console.log('Apply filter')
    }

    useEffect(() => {
        getDefaultFilterValues();
    }, [])

    useEffect(() => {
        if (additionalFilterValues) {
            handleChangeFilterValues(additionalFilterValues['key'], additionalFilterValues['value']);
        }
    }, [additionalFilterValues])

    return (
        <Dropdown as={ButtonGroup} autoClose="outside" align={'end'}>
            <Dropdown.Toggle id="dropdown-split-basic" bsPrefix="p-0" className="d-flex align-items-center rounded-right p-1" style={{ borderRadius: 'inherit' }}>
                <DynamicIcon iconName={'filter'} iconBackground={false} iconColor={null} iconSize={defaultIconMinHeight} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-2">
                <Dropdown.Header className="p-1">
                    <div className="d-flex align-items-center">
                        <div className="font-weight-bold">Filters</div>
                        <button className="ml-auto border-none bg-white text-secondary" onClick={() => getDefaultFilterValues()}>Reset</button>
                    </div>
                </Dropdown.Header>
                <div className="max-height-96 overflow-auto">
                    {
                        filterFields.length > 0 && filterFields.map(filterField => {
                            return (
                                <div className="w-100 p-1" key={'filter_field_' + filterField.name}>
                                    <p className="my-1">{filterField.title}</p>
                                    <Form.Select value={filterValues[filterField.name]} onChange={(e) => handleChangeFilterValues(filterField.name, e.target.value)} className="w-100 custom-select custom-select-sm">
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
                    <Button className="w-100" onClick={() => handleApplyFilter()}>Search</Button>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Filter