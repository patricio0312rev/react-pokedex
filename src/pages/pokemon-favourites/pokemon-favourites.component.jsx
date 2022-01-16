import React from 'react'
import { connect } from 'react-redux'
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        height: '100vh',
        backgroundColor: 'rgb(68, 68, 68)',
        paddingTop: 75,
    }
}));

export const PokemonFavouritesPage = (props) => {
    const classes = useStyles();
    const { favourites } = props;

    return (
        <Box>
            <Grid container spacing={2} className={ classes.pokedexContainer } >
                {favourites.map((pokemon) => {
                    return(
                        <PokemonCard pokemon={pokemon} key={pokemon.id} image={pokemon.sprites.front_shiny}></PokemonCard>
                    );
                })}
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    favourites: state.favourites,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFavouritesPage)
