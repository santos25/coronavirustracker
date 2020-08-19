import React, { useState, useEffect } from 'react'

import { FormControl, Select, makeStyles } from '@material-ui/core'
import { fetchCountries } from '../../Api';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '25%',
        margin: theme.spacing(3)
    }
})
)

const CounterPicker = ({ countrySelected, handleCountry }) => {
    const classes = useStyles()
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setCountries(await fetchCountries())

        }

        fetch();
    }, [])

    // console.log(countries);

    return (
        <FormControl className={classes.formControl}>
            <Select
                native
                value={countrySelected}
                onChange={(e) => handleCountry(e.target.value)}

            >
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </Select>
        </FormControl>
    )
}

export default CounterPicker
