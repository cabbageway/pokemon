import React from 'react';
import {pokeData} from "../../common/models/mockData";
import {pokemon} from "../../common/models/pokemon";

interface PokeDetailsProps {
    detailedPoke : pokemon,
    toPokeTeam : () => void
}

const PokeDetails = ({detailedPoke, toPokeTeam}:PokeDetailsProps) => {
    return (
        <div>
            <h1>{detailedPoke.name}</h1>
            <img src={detailedPoke.image}  alt=""/>
            <button className="btn btn-secondary" onClick={toPokeTeam}>Übersicht</button>
        </div>
    );
};

export default PokeDetails;