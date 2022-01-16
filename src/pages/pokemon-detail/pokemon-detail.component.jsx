import React, { useEffect, useState } from "react";

import './pokemon-detail.styles.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Favorite } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        height: '80vh',
        backgroundColor: 'black',
        color: 'white',
        marginTop: 75,
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 30,
    }, 
    textTitle: {
        textTransform: 'uppercase',
        fontFamily: 'Fantasy',
    },
    pokemonImage: {
        width: '170px',
        height: '170px',
    },
    pokemonInfoContainer: {
        bottom: 60,
        position: 'absolute',
        width: '100%',
    },
    separator: {
        height: '0.01mm',
        width: '95%',
    },
    favourite: {
        height: 50,
        width: 50,
        marginTop: 15,
    },
    text: {

    },
}))

const PokemonDetailPage = () => {
    const [pokemon, setPokemonData] = useState({});

    const classes = useStyles();
    const baseUri = process.env.REACT_APP_BASE_API_URL;
    const imageUri = process.env.REACT_APP_IMAGE_API_URL;
    const {id} = useParams();

    const getPokemonDataAxios = async () => {
        axios.get(`${baseUri}/${id}`).then((response) => {
            if(response.status >= 200 && response.status < 300) {
                const { data } = response;
                setPokemonData(data);
                console.log(pokemon);
            }
        });
    }

    useEffect(() => {
        getPokemonDataAxios();
    }, []);

    return (
        <Box>
            { pokemon ?
                <Box className={ classes.pokedexContainer }>
                    <Typography className={ classes.textTitle } variant="h1">
                        {pokemon.name}
                    </Typography>

                    <img src={`${imageUri}/${id}.png`}  alt={pokemon.name} className={ classes.pokemonImage } />

                    <Box className={ classes.pokemonInfoContainer }>
                        <hr className={ classes.separator }></hr>
                        <Grid container>
                            <Grid item md={1}>
                                <Button className={ classes.favourite }>
                                    <Favorite style={{ color: "white", fontSize: 50 }} />
                                </Button>
                            </Grid>

                            <Grid item md={2}>
                                <Typography className={ classes.text }>
                                    Name
                                    <br></br>
                                    {pokemon.name}
                                </Typography>
                            </Grid>

                            <Grid item md={2}>
                                <Typography className={ classes.text }>
                                    Height
                                    <br></br>
                                    {pokemon.height} m
                                </Typography>
                            </Grid>

                            <Grid item md={2}>
                                <Typography className={ classes.text }>
                                    Weight
                                    <br></br>
                                    {pokemon.weight} kg
                                </Typography>
                            </Grid>

                            <Grid item md={2}>
                                <Typography className={ classes.text }>
                                    Type(s)
                                    <br></br>

                                    {pokemon.types.map((pokemonTypes) => {
                                        const { name } = pokemonTypes.type;
                                        
                                        return (
                                            <Typography>
                                                { name }
                                                <br></br>
                                            </Typography>
                                        )
                                    })}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                :
                <Box>No</Box>
            }
        </Box>
    );
}

export default PokemonDetailPage;