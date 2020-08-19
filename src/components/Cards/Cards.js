import React from 'react'

import Card from './Card/Card';

import {
    Grid, 
    makeStyles
} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '5% 0px'
    }
})
)

const Cards = ({ data : {confirmed , recovered, deaths , lastUpdate} }) => {

    // console.log(confirmed);
    // console.log(lastUpdate);

    const classes = useStyle();
    if(!confirmed) {
        return ( 
            <h2>Loading...</h2>
        )
    }

    return (
        <div className={classes.container}>
            <Grid container spacing={4} justify="center">
                <Card  label="Infectados" value={confirmed.value} date={lastUpdate}  subtitle="activos" color="#231AA2"/>
                <Card  label="Recuperados" value={recovered.value} date={lastUpdate}  subtitle="recuperados" color="#17C823"/>
                <Card  label="Muertes" value={deaths.value} date={lastUpdate}  subtitle="muertes" color="#C90C1C"/>
            </Grid>

        </div>

    )
}

export default Cards
