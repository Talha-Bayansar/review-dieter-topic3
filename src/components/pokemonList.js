import React, { useEffect } from "react";
import { PokemonCard } from "./pokemonCard";
import { Grid } from "@material-ui/core";

export function PokemonList(props) {
    const { pokemonList } = props;

    return (
        <>
            <Grid container>
                {pokemonList == null
                    ? console.log(pokemonList)
                    : pokemonList.results.map((p) => (
                          <Grid item xs={12} sm={6} md={4} lg={3}>
                              <PokemonCard pokemonurl={p} />
                          </Grid>
                      ))}
            </Grid>
        </>
    );
}
