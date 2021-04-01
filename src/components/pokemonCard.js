import React, { useCallback, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useActivePokemonContext } from "../context/activePokemon_context";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 245,
        color: "#fff",
        margin: "10%",
        backgroundColor: "#21bf53",
    },
    media: {
        height: 0,
        paddingTop: "100%", // 16:9
    },
    type: {
        display: "inline",
        padding: "15%",
    },
    info: {
        textDecoration: "none",
    },
}));

export function PokemonCard(props) {
    const classes = useStyles();
    const { pokemonurl } = props;
    const [pokemon, setPokemon] = useState(null);
    const { setActivePokemon } = useActivePokemonContext();
    const fetchPokemon = useCallback(async () => {
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(pokemonurl.url, fetchOptions);
        const body = await response.json();
        console.log(body);
        setPokemon(body);
    }, [pokemonurl]);
    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);
    if (pokemon == null) {
        return <></>;
    } else {
        return (
            <Card className={classes.root}>
                <CardHeader title={`#${pokemon.id} ${pokemon.name}`} />
                <CardMedia
                    className={classes.media}
                    image={pokemon.sprites.front_default}
                    title={pokemon.name}
                />
                <CardContent>
                    {pokemon.types.map((t) => {
                        return (
                            <Typography className={classes.type} component="p">
                                {t.type.name}
                            </Typography>
                        );
                    })}
                </CardContent>
                <CardActions>
                    <Link className={classes.info} to={"/pokemon"}>
                        <Button
                            onClick={() => {
                                setActivePokemon(pokemon);
                            }}
                            variant="contained"
                        >
                            Meer info
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        );
    }
}
