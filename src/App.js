import "./App.css";
import { Nav } from "./components/nav";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ActivePokemonProvider } from "./context/activePokemon_context";
import { PokemonList } from "./components/pokemonList";
import { PokemonInfo } from "./components/pokemonInfo";
import React, { useCallback, useEffect, useState } from "react";

function ProvidedApp() {
    const [isPokemonInfo, setIsPokemonInfo] = useState(false);
    const [pokemonList, setPokemonList] = useState(null);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const fetchPokemonlist = useCallback(async () => {
        const fetchOptions = {
            method: "GET",
        };
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
            fetchOptions
        );
        const body = await response.json();
        console.log(body);
        setPokemonList(body);
    }, [offset, limit]);

    useEffect(() => {
        fetchPokemonlist();
    }, [fetchPokemonlist, offset, limit]);
    return (
        <div>
            <HashRouter basename="/">
                <Nav
                    isPokemonInfo={isPokemonInfo}
                    offset={offset}
                    setOffset={setOffset}
                    limit={limit}
                    setLimit={setLimit}
                />
                <Switch>
                    <Route path="/pokemon">
                        <PokemonInfo setIsPokemonInfo={setIsPokemonInfo} />
                    </Route>
                    <Route path="/">
                        <PokemonList
                            pokemonList={pokemonList}
                            setIsPokemonInfo={setIsPokemonInfo}
                        />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

function App() {
    return (
        <ActivePokemonProvider>
            <ProvidedApp />
        </ActivePokemonProvider>
    );
}

export default App;
