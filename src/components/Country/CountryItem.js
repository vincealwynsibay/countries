import React, { useState } from "react";
import { Link } from "react-router-dom";
import Country from "./Country";

const CountryItem = ({ country }) => {
    // const handleClick = (countryName) => {
    //     console.log("nice");
    //     setQuery(countryName);
    // };onClick={() => handleClick(country.name.official)}

    return (
        <div className="bg-white flex flex-col w-9/12 my-5 rounded-lg shadow-sm overflow-hidden mx-auto dark:bg-db">
            <Link
                className="flex w-full justify-center"
                to={`/${country.area}`}
                key={country.name.official}
            >
                <div className="w-full h-full">
                    <img src={`${country.flags.svg}`} alt="" />
                </div>
            </Link>
            <div className="pb-8 px-6">
                <h3 className="font-bold mb-2 pt-2">{country.name.official}</h3>
                <p>
                    <span className="font-semibold">Population: </span>
                    {country.population}
                </p>
                <p>
                    <span className="font-semibold">Region: </span>
                    {country.region}
                </p>
                <p>
                    <span className="font-semibold">Capital: </span>
                    {country.capital}
                </p>
            </div>
        </div>
    );
};

export default CountryItem;
