import { Box, CircularProgress, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import './pokedex.styles.css';

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        textAlign: 'center',
        padding: '80px 10px 0px 10px',
        backgroundColor: 'rgb(68,68,68)',
    }
}));

const PokedexPage = () => {
    const classes = useStyles();

    const baseUri = process.env.REACT_APP_BASE_API_URL;
    const imageUri = process.env.REACT_APP_IMAGE_API_URL;

    const [pokemonData, setPokemonData] = useState([]);

    const getPokemonData = async () => {
        // Usando el método clásico
        try {
            let url = `${baseUri}?limit=800`
            let res = await fetch(url);

            let data = await res.json();
            console.log(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    const axiosPokemonData = () => {
        // Usando Axios
        axios.get(`${baseUri}?limit=900`).then((response) => {
            if(response.status >= 200 && response.status < 300) {
                const { results } = response.data;
                let newPokemonData = [];

                results.forEach((pokemon, index) => {
                    index++;
                    let pokemonObject = {
                        id: index,
                        url: `${imageUri}/${index}.png`,
                        name: pokemon.name,
                    }

                    newPokemonData.push(pokemonObject);
                });

                setPokemonData(newPokemonData);
            }
        });
    }

    useEffect(() => {
        // getPokemonData();
        axiosPokemonData(); 
    }, []);

    return(
        <Box>
            {
                pokemonData ? 
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    { pokemonData.map((pokemon) => {
                        return <PokemonCard style={{ marginLeft: 10 }} pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
                    })}
                </Grid> 
                :
                <CircularProgress style={{ marginTop: 100 }} />
            }
        </Box>
    );
}

export default PokedexPage;