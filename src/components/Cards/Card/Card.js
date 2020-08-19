import React from 'react'
import CountUp from 'react-countup';
import clsx from 'clsx';


import {
    Grid,
    Card as CardMaterial,
    CardContent, Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.down('xs')]: {
            margin: '10px 25px',
        },
        margin: '0 2%',

    },
    border: {
        borderBottom: props => `5px solid ${props.color}`
    }
}))

const Card = ({ label, value, date, subtitle, ...props }) => {
    const classes = useStyles(props);

    return (
        <Grid xs={12} sm={3} className={clsx(classes.card, classes.border)} item component={CardMaterial}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{label}    </Typography>
                <Typography variant="h5" >
                    <CountUp end={value}
                        separator="." />
                </Typography>
                <Typography color="textSecondary">{new Date(date).toDateString()}    </Typography>
                <Typography variant="body2" > {`Numero de casos ${subtitle} causados por el COVID`}    </Typography>
            </CardContent>
        </Grid>
    )
}

export default Card
