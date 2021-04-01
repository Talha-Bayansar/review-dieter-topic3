import React, { useEffect } from "react";
import { useActivePokemonContext } from "../context/activePokemon_context";

function Abilities(props) {
    const { abilities } = props;
    return (
        <div>
            {abilities.map((a) => (
                <p>{a.ability.name}</p>
            ))}
        </div>
    );
}

function Stats(props) {
    const { stats } = props;

    return (
        <table className="tg">
            <thead>
                <tr>
                    <th>hp</th>
                    <th>attack</th>
                    <th>defense</th>
                    <th>special-attack</th>
                    <th>special-defense</th>
                    <th>speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {stats.map((s) => (
                        <td>{s.base_stat}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export function PokemonInfo(props) {
    const { activePokemon } = useActivePokemonContext();
    const { setIsPokemonInfo } = props;
    console.log(activePokemon);
    useEffect(() => {
        setIsPokemonInfo(true);
    }, [setIsPokemonInfo]);
    return (
        <div>
            {activePokemon.name}
            <Abilities abilities={activePokemon.abilities} />
            <Stats stats={activePokemon.stats} />
        </div>
    );
}
