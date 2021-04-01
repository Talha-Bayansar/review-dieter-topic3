import React, { createContext, useContext, useMemo, useState } from "react";

const ActivePokemonContext = createContext();

export function ActivePokemonProvider(props) {
    const [activePokemon, setActivePokemon] = useState(null);
    const api = useMemo(
        () => ({
            activePokemon,
            setActivePokemon,
        }),
        [activePokemon, setActivePokemon]
    );
    return (
        <ActivePokemonContext.Provider value={api}>
            {props.children}
        </ActivePokemonContext.Provider>
    );
}

export const useActivePokemonContext = () => useContext(ActivePokemonContext);
