import React from "react";

const Search = ({ query, setQuery }) => {
    return (
        <input
            className="py-2 px-5 pl-9 mx-3 shadow-md outline-none sm: w-6/12 dark:bg-db"
            type="text"
            name="query"
            value={query}
            placeholder="Search for a Country... "
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default Search;
