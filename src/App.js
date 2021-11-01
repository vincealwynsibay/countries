import { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Countries from "./components/Country/Countries";
import Search from "./components/Filter/Search";
import SelectFilter from "./components/Filter/SelectFilter";
import { getAllCountries, getCountriesByRegion } from "./services/countries";
import Country from "./components/Country/Country";
import Navbar from "./components/Layout/Navbar";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [filterSelectValue, setFilterSelectValue] = useState("");

    useEffect(() => {
        async function fetchData() {
            const countryData = await getAllCountries();
            setCountries(countryData);
        }
        fetchData();
    }, []);

    let filteredCountries = countries;

    if (filterSelectValue) {
        filteredCountries = countries.filter((country) =>
            country.region
                .toLowerCase()
                .includes(filterSelectValue.toLowerCase().trim())
        );

        if (filteredCountries.length === 0) {
            filteredCountries = countries;
        }
    }

    if (query) {
        filteredCountries = countries.filter((country) =>
            country.name.official
                .toLowerCase()
                .includes(query.toLowerCase().trim())
        );
    }

    const areaMatch = useRouteMatch("/:area");
    const countryByArea = areaMatch
        ? countries.find(
              (country) => country.area === Number(areaMatch.params.area)
          )
        : null;

    // const regionMatch = useRouteMatch("/:region");
    // const countriesByRegion = regionMatch
    //     ? countries.filter((country) =>
    //           country.region
    //               .toLowerCase()
    //               .includes(regionMatch.params.region.toLowerCase().trim())
    //       )
    //     : null;

    // console.log(countriesByRegion);

    return (
        <div className="bg-vg dark:bg-vdb1 dark:text-white">
            <Navbar />
            <Switch>
                <Route path="/:area">
                    <Country country={countryByArea} />
                </Route>
                {/* <Route path="/:region">
                    <SelectFilter setFilterValue={setFilterSelectValue} />
                    <Search query={query} setQuery={setQuery} />
                    <Countries countries={countriesByRegion} />
                </Route> */}
                <Route exact path="/">
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-5">
                        <Search query={query} setQuery={setQuery} />
                        <SelectFilter setFilterValue={setFilterSelectValue} />
                    </div>
                    <Countries
                        countries={filteredCountries}
                        setQuery={setQuery}
                    />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
