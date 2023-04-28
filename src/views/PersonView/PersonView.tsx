import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PersonView.css';
import PersonAdd from "../PersonAdd/PersonAdd";

interface IPerson {
    id:number,
    name: string,

}

interface PersonViewProps {
    onclick : () => void
}
const PersonView = ({onclick}:PersonViewProps) => {
const [persons,setPersons] = useState<IPerson[]>([]);

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
        <div className="m-5">
                <h1> Person list </h1>
                <ul>
                    { persons.map(person =>
                            <li key={person.id}>{person.id} {person.name} </li>
                         ) }
                </ul>
                <a href="/personAdd">Link to PersonAdd</a>
                <br/>
                <a className="btn btn-secondary mt-1" href="/personAdd">Link (btn) to PersonAdd</a>

        </div>
    );
};

export default PersonView;