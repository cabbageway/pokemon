import React, {useState} from 'react';
import {pokemon} from "../../common/models/pokemon";

interface PokeFormProps {
    toPokeTeam : () => void
    onSave : (pokeItem:pokemon) => void
}

const PokeForm = ({toPokeTeam, onSave} : PokeFormProps) => {
    /* const toPokeTeam = () => {
        // local Code
    }  */
    let [pokeItem, setPokeItem] = useState <pokemon>({pokeIndex:1,
        name:"", type:"", image:""});
    const handleNameChange = (name:string) => {
        let newPokeItem = {...pokeItem, name: name};
        setPokeItem(newPokeItem);
    }
    const handleTypeChange = (type:string) => {
        let newPokeItem = {...pokeItem, type: type};
        setPokeItem(newPokeItem);
    }
    const onsubmit = (event:any) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>PokeForm</h1>
            <div >
            <form onSubmit={onsubmit}>
            <div className="form-group m-2">
                <label htmlFor="name">Name</label>
                <input className="form-control"
                       type="text"
                       id="name"
                       onChange={e => handleNameChange(e.target.value)}
                />
            </div>
                <div className="form-group m-2">
                    <label htmlFor="type">Type</label>
                    <input className="form-control"
                           type="text"
                           id="type"
                           onChange={e => handleTypeChange(e.target.value)}
                    />
                </div>

                <div className="form-group m-2">
                <button className="btn btn-primary" onClick={() => onSave(pokeItem)} >Add Pokemon</button>
                </div>

            </form>

            <button className="btn btn-secondary" onClick={toPokeTeam}>Übersicht</button>
            </div>
        </div>
    );
};

export default PokeForm;