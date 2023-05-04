import { defaultIconMinHeight } from "@/components/Constants/default-icon.constant";
import { Dispatch, SetStateAction } from "react";

type SearchProps = {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>
}

const Search = ({ searchValue, setSearchValue }: SearchProps) => {
    return (
        <input
            type="text"
            name="search"
            className="form-control font-size-md rounded-left"
            id="i-search"
            placeholder="Search"
            style={{ minHeight: defaultIconMinHeight * 2 + 5 }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} />
    );
};

export default Search;