import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PersonView.css';

interface person {
    id:number,
    name: string,

}

interface PersonViewProps {
    onclick : () => void
}
const PersonView = ({onclick}:PersonViewProps) => {
const [persons,setPersons] = useState<person[]>([]);

//effect hook
    useEffect(()=> {
        getPersons();
    },[]);

const getPersons = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                const status = res.status;
                setPersons(persons);
            })
    }
    return (
        <div>
                <h1> Person list </h1>
                <ul>
                    { persons.map(person =>
                            <li key={person.id}>{person.id} {person.name} </li>
                         ) }
                </ul>
                <button onClick={onclick}>Add a Person</button>
        </div>
    );
};

export default PersonView;