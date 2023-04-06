const PartialMenu = ({ data, onEdit, onDelete }) => {
    return (
        <div className="dropdown">
            <button
                type="button"
                className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-split reset-after"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" onClick={() => onEdit(data)}>Edit</button>
                <button className="dropdown-item" onClick={() => onDelete(data)}>Delete</button>
            </div>
        </div>
    );
};

export default PartialMenu;