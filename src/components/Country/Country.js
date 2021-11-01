import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountriesByCode } from "../../services/countries";

const Country = ({ country }) => {
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        async function fetchBorderCountries(codes) {
            const borderCountriesData = await getCountriesByCode(codes);
            setBorderCountries(borderCountriesData);
        }
        if (country && borderCountries.length === 0) {
            fetchBorderCountries(country.borders);
            return <div className="">loading...</div>;
        }
    });

    if (!country || borderCountries.length === 0) {
        return null;
    }

    return (
        <div className="h-v90  w-10/12 mx-auto">
            <div className="py-2 px-4 dark:bg-db w-2/12 my-5 sm:my-10">
                <Link className="" to="/">
                    <p className="">back</p>
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-10  justify-content">
                <div className="flex-1 w-full">
                    <img className="" src={`${country.flags.svg}`} alt="" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold mb-5">{country.name.official}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="mb-4">
                            <p className="font-light">
                                <span className="font-normal">
                                    Native Name:{" "}
                                </span>
                                {Object.keys(country.name.nativeName)
                                    .map(
                                        (key) =>
                                            country.name.nativeName[key]
                                                .official
                                    )
                                    .join(", ")}
                            </p>
                            <p className="font-light">
                                <span className="font-normal">
                                    Population:{" "}
                                </span>
                                {country.population}
                            </p>
                            <p className="font-light">
                                <span className="font-normal">Region: </span>
                                {country.region}
                            </p>
                            <p className="font-light">
                                <span className="font-normal">
                                    Sub Region:{" "}
                                </span>
                                {country.subregion}
                            </p>
                            <p className="font-light">
                                <span className="font-normal">Capital: </span>
                                {country.capital}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="font-light">
                                <span className="font-normal">
                                    Currencies:{" "}
                                </span>
                                {Object.keys(country.currencies)
                                    .map((key) => country.currencies[key].name)
                                    .join(", ")}
                            </p>
                            <p className="font-light">
                                <span className="font-normal">Languages: </span>

                                {Object.keys(country.languages)
                                    .map((key) => country.languages[key])
                                    .join(", ")}
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="font-normal mb-4">Border Countries: </h4>
                        <div className="">
                            {borderCountries.map((borderCountry) => (
                                <div className="shadow-md rounded-sm bg-white my-1 px-4 py-2 cursor-pointer dark:bg-db">
                                    <Link
                                        to={`/${borderCountry.area}`}
                                        key={borderCountry.name.official}
                                    >
                                        {borderCountry.name.official}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
