import { useState } from "react";
import Search from "./Search";
import Filter, { FilterFields } from "./Filter";
import PartialMenu from "./PartialMenu";
import CustomPagination from "../CustomPagination";
import ConfirmModal, { ConfirmModalInformation } from "../ConfirmModal";
import DynamicIcon from "../DynamicIcon";
import { defaultIconMinHeight } from "@/components/Constants/default-icon.constant";

const exportButton: ConfirmModalInformation = {
    icon: {
        iconName: 'download',
        iconSize: defaultIconMinHeight,
        iconColor: null,
        iconBackground: false
    },
    text: '',
    textColor: 'white',
    height: defaultIconMinHeight * 2,
    fontSize: 12,
    title: 'Export',
    content: 'Are you sure to export this table?',
    confirmText: 'Export',
    confirmButtonColor: 'primary',
    cancelText: 'Close',
}

export type columnType = {
    title?: string,
    dataIndex: string,
    key?: string,
    className?: string,
    render?: (text: string, record?: any, index?: number) => React.ReactNode,
};

type TableProps = {
    headerTitle?: string,
    dataSource?: any[],
    columns?: Array<columnType>,
    partials?: string[],
    filterFields?: FilterFields[],
    exportFile?: boolean,
};

const Table = ({ headerTitle, dataSource, columns, partials, filterFields, exportFile }: TableProps) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="card border-0 shadow-sm">
            <div className="card-header align-items-center">
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <div className="font-weight-medium py-1">
                            {headerTitle || "Table"}
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="input-group input-group-sm">
                            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                            <Filter filterFields={filterFields ? filterFields : []} />
                            {exportFile &&
                                <div className="btn btn-sm btn-primary d-flex align-items-center p-0 ml-1">
                                    <ConfirmModal item={exportButton} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                {
                    dataSource && dataSource.length > 0 ? (
                        <div className="list-group list-group-flush my-n3">
                            <div className="list-group-item px-0 text-muted">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="row">
                                            {
                                                columns?.map((column, index) => (
                                                    <div className={column.className} key={index}>
                                                        {column.title}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    {
                                        partials && (
                                            <div className="col-auto">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <div className="invisible btn d-flex align-items-center btn-sm text-primary">
                                                            <DynamicIcon iconName={'more'} iconColor={null} iconBackground={false} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                dataSource.filter(item => item.name.toLowerCase().includes(searchValue.trim())).map((data, index) => (
                                    <div className="list-group-item px-0" key={index}>
                                        <div className="row align-items-center">
                                            <div className="col text-truncate">
                                                <div className="row text-truncate align-items-center">
                                                    {
                                                        columns?.map((column, index) => (
                                                            <div className={column.className} key={index}>
                                                                {
                                                                    column.render ? (
                                                                        column.render(data[column.dataIndex], data, index)
                                                                    ) : (
                                                                        data[column.dataIndex]
                                                                    )
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            {
                                                partials && (
                                                    <div className="col-auto">
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <PartialMenu data={data} index={index} partials={partials} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>No results found.</div>
                    )
                }
            </div>
            <div className="card-footer d-flex align-items-center">
                <div className="ml-auto">
                    <CustomPagination />
                </div>
            </div>
        </div>
    );
};

export default Table;