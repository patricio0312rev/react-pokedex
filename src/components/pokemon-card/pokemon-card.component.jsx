import React from "react";

import './pokemon-card.styles.css';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: 'pointer',
        backgroundColor: 'black!important',
        color: 'white!important',
        "&:hover": {
            backgroundColor: "rgb(90,90,90)!important",
            transition: "all 2s ease",
        }
    },
    cardMedia: {
        margin: 'auto',
        width: 130,
        height: 130,
    },
    cardContent: {
        textAlign: 'center',
    }
}));

const PokemonCard = (props) => {
    const classes = useStyles();
    const { pokemon, image } = props;
    const { id, name } = pokemon;

    return(
        <Grid item xs={12} sm={2} key={id}>
            <Card className={classes.card}>
                <CardMedia image={image} className={classes.cardMedia}></CardMedia>

                <CardContent className={classes.cardContent}>
                    <Typography>{name}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonCard;