import React from "react";
import { useHistory } from "react-router-dom";
const SelectFilter = ({ setFilterValue }) => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    // const history = useHistory();

    const handleChange = (e) => {
        setFilterValue(e.target.value);
        // <Redirect to={`/${e.target.value}`} />;
        // history.push(`/${e.target.value.toLowerCase()}`);
    };

    return (
        <select
            className="w-6/12 py-2 px-2 shadow-sm mx-3 rounded-md sm:w-3/12 dark:bg-db"
            onChange={handleChange}
        >
            <option value="all">All</option>
            {regions.map((region) => {
                return (
                    <option key={region} value={region}>
                        {region}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectFilter;
