import { MdFilterAlt } from "react-icons/md";

const Filter = () => {
    return (
        <div className="input-group-append">
            <button
                type="button"
                className="btn btn-outline-primary d-flex align-items-center dropdown-toggle dropdown-toggle-split reset-after"
                data-tooltip="true" title="Filters" 
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <MdFilterAlt className="fill-current width-4 height-4" />
            </button>
        </div>
    );
}

export default Filter