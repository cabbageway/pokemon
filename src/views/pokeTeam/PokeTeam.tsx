import React from 'react';
import PokeEntry from "../pokeEntry/PokeEntry";
import {pokemon} from "../../common/models/pokemon";


interface PokeTeamProps {
    pokeTeam: pokemon[],
    deleteRow: (id:number) => void,
    switchToForm: () => void
    //showPokeDetails: (id:number) => void
    showPokeDetails: (poke:pokemon) => void
}
const PokeTeam: React.FC<PokeTeamProps> = ({pokeTeam, deleteRow, switchToForm, showPokeDetails} ) => {

    return (
        <div>
            <div>
            <h1>Poketeam</h1>

            </div>

            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">PokeIndex</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Image</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    pokeTeam.map((poke, index) => {
                    return (

                    <PokeEntry key= {poke.pokeIndex} pokeIndex={poke.pokeIndex} name={poke.name}
                               type={poke.type} image={poke.image} deleteRow={deleteRow} showPokeDetails={
                        () => showPokeDetails(poke)}
                    />

                )
                })}
                    </tbody>
                </table>
                <button onClick={switchToForm}>ToForm</button>

            </div>
        </div>
    );
};

export default PokeTeam;