const baseUrl = `https://restcountries.com/v3.1`;

export const getAllCountries = async () => {
    const res = await fetch(`${baseUrl}/all`).then((res) => res.json());
    const data = await res;
    console.log(data);
    return data;
};

export const getCountriesByName = async (name) => {
    const res = await fetch(`${baseUrl}/name/${name}`).then((res) =>
        res.json()
    );
    const data = await res;

    return data;
};

export const getCountriesByRegion = async (region) => {
    const res = await fetch(`${baseUrl}/region/${region}`).then((res) =>
        res.json()
    );
    const data = await res;
    return data;
};

export const getCountriesByCode = async (codes) => {
    const res = await fetch(`${baseUrl}/alpha?codes=${codes.join(",")}`).then(
        (res) => res.json()
    );
    const data = await res;
    return data;
};
