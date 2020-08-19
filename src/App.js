import React from 'react';

import { fetchData } from './Api'
import './App.css';
import covidimage from './images/covidimage.png';

import Card from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';

class App extends React.Component {
    state = {
        data: {},
        countrySelected: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })

    }

    handleCountry = async (value) => {
        // console.log(value);
        const result = await fetchData(value);
        // console.log(result);
        this.setState({ data: result, countrySelected: value })
    }

    render() {
        const { confirmed, recovered, deaths } = this.state.data
        // console.log(this.state.data);
        return (
            <div>
                <div className='container'>
                    <img src={covidimage} alt="COVID" />
                    <Card data={this.state.data} />
                    <CountryPicker countrySelected={this.state.countrySelected} handleCountry={this.handleCountry} />
                    <Chart country={this.state.countrySelected} confirmed={confirmed} recovered={recovered} deaths={deaths} />
                </div>
                <footer>
                    <h4>Desarrollado por Andres Santos</h4>
                </footer>
            </div>


        )
    }
}

export default App;