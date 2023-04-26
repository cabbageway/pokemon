import React from 'react';


interface PokeEntryProps {
    pokeIndex : number,
    name: string,
    type: string,
    image:string
    deleteRow: (id:number) => void
    showPokeDetails: (id:number) => void
}

const PokeEntry = ({pokeIndex, name, type, image, deleteRow, showPokeDetails }: PokeEntryProps) => {

    const lokal = (event:any) => {
        console.log(event.target.id);
        const element = document.getElementById(event.target.id);
        // @ts-ignore
        element.style.backgroundColor="red";
    }
    return (

            <tr >
                <td>
                {pokeIndex}
            </td>
            <td>{name}</td>
            <td >{type}</td>
            <td><img onClick={()=>showPokeDetails(pokeIndex)} width="20%" src={image}/></td>
                <td><button id={pokeIndex.toString()} className="btn" onClick={lokal}>change</button></td>
                <td><button className="btn" onClick={() => {
                    deleteRow(pokeIndex)}
                }>delete</button></td>
            </tr>

    );
};

export default PokeEntry;