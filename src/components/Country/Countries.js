import React from "react";
import CountryItem from "./CountryItem";
import Country from "./Country";
import { Link } from "react-router-dom";

const Countries = ({ countries }) => {
    if (countries.length === 1) {
        return <Country country={countries[0]} />;
    }

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {countries.map((country) => (
                <CountryItem country={country} />
            ))}
        </div>
    );
};

export default Countries;
