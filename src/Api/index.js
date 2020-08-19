
const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    try {
        let urlChange = URL;
        if(country){
            urlChange = `${URL}/countries/${country}`
        }

        const data = await fetch(urlChange);
        const { confirmed, recovered, deaths, lastUpdate } = await data.json();

        const dataObject = {
            confirmed,
            recovered,
            deaths,
            lastUpdate

        }
        return dataObject;

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const data = await fetch(`${URL}/countries`);
        const { countries } = await data.json();
        // console.log(countries);
        const datas = countries.map(country => country.name)
        return datas;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDaily = async () => {
    try {
        const data = await fetch(`${URL}/daily`);
        const result = await data.json();
        const dataDaily = result.map(({ confirmed, deaths, reportDate }) => ({ confirmed: confirmed.total, deaths: deaths.total, date: reportDate }))
        return dataDaily;

    } catch (error) {
        console.log(error);

    }
}