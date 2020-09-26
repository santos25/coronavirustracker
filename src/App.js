import React from "react";

import "./App.css";

//fetch Api
import { fetchDataGlobal, fetchDataByCountry, fetchDataProv } from "./Api";

//components
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import TableProvinces from "./components/Table/TableProvinces";
import Nav from "./components/Nav/Nav";

class App extends React.Component {
  state = {
    data: {},
    dataProvinces: [],
    countrySelected: null,
    countryFilter: "",
    stepTable: 1,
    loadingDataSelected: false,
  };

  async componentDidMount() {
    const fetchedData = await fetchDataGlobal();
    const fetchedDataProvinces = await fetchDataProv();

    this.setState({ data: fetchedData, dataProvinces: fetchedDataProvinces });
  }

  handleCountry = async (value) => {
    // console.log(value);
    const result = await fetchDataByCountry(value.countryCode);
    // console.log(result);
    this.setState({ data: result, countrySelected: value.countryCode });
  };

  renderTableOrLine = () => {
    if (this.state.stepTable === 1) {
      return (
        <TableProvinces
          countrySelected={this.state.countrySelected}
          provinces={this.state.dataProvinces}
        />
      );
    } else {
      const { confirmed, recovered, deaths } = this.state.data;
      return (
        <Chart
          country={this.state.countrySelected}
          confirmed={confirmed}
          recovered={recovered}
          deaths={deaths}
        />
      );
    }
  };
  render() {
    const { lastUpdate } = this.state.data;
    // console.log(this.state.data);
    return (
      <div>
        <Nav />
        <div className="container">
          <h3>Last updated : {new Date(lastUpdate).toDateString()} </h3>
          <Cards data={this.state.data} />

          <div className="section-data">
            <div className="search-country">
              <form action="">
                <input
                  type="text"
                  placeholder="Search Country"
                  onChange={(e) =>
                    this.setState({ countryFilter: e.target.value })
                  }
                />
              </form>

              <CountryPicker
                countryFilter={this.state.countryFilter}
                countrySelected={this.state.countrySelected}
                handleCountry={this.handleCountry}
              />
            </div>
            <div className="section-table">
              {this.state.stepTable === 0 ? (
                <button onClick={() => this.setState({ stepTable: 1 })}>
                  CITIES
                </button>
              ) : (
                <button onClick={() => this.setState({ stepTable: 0 })}>
                  PIE
                </button>
              )}

              {this.renderTableOrLine()}
            </div>
          </div>
        </div>
        <footer>
          <h5>Developed By AS</h5>
        </footer>
      </div>
    );
  }
}

export default App;
