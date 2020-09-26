const URL = "https://covid19.mathdro.id/api";
const URLV2 = "https://www.trackcorona.live/api";

export const fetchDataGlobal = async (country) => {
  try {
    let urlChange = URL;
    if (country) {
      urlChange = `${URL}/countries/${country}`;
    }

    const data = await fetch(urlChange);
    const { confirmed, recovered, deaths, lastUpdate } = await data.json();

    const dataObject = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return dataObject;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataByCountry = async (country) => {
  try {
    let urlChange = `${URLV2}/countries/${country}`;

    // console.log(country);

    const data = await fetch(urlChange);

    const {
      data: [{ confirmed, dead, recovered, updated }],
    } = await data.json();

    // console.log({ confirmed, dead, recovered });

    const dataObject = {
      confirmed: { value: confirmed },
      recovered: { value: recovered },
      deaths: { value: dead },
      lastUpdate: updated,
    };

    return dataObject;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataProv = async () => {
  try {
    let urlChange = `${URLV2}/cities`;

    // console.log(country);

    const result = await fetch(urlChange);

    const { data } = await result.json();

    // console.log({ confirmed, dead, recovered });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const result = await fetch(`${URLV2}/countries`);
    const { data } = await result.json();
    // console.log(countries);
    const datas = data.map((country) => ({
      location: country.location,
      countryCode: country.country_code,
    }));
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDaily = async () => {
  try {
    const data = await fetch(`${URL}/daily`);
    const result = await data.json();
    const dataDaily = result.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: reportDate,
    }));
    return dataDaily;
  } catch (error) {
    console.log(error);
  }
};
