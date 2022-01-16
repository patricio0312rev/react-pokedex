import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import './navigator.styles.css';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black!important',
    },
    Link: {
        textDecoration: 'none',
    },
    title: {
        cursor: 'pointer',
        color: 'white',
    }
}));

const Navigator = () => {
    const classes = useStyles();

    return(
        <AppBar className={classes.AppBar} position="fixed" >
            <Toolbar>
                <Link to="/" className={classes.Link}>
                    <Typography className={classes.title} variant="h6">Pokedex</Typography>
                </Link>
                <Link to="/pokemon/favourites" className={classes.Link} style={{ marginLeft: 10 }}>
                    <Typography className={classes.title} variant="h6">Favourites</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navigator;