import React, {useEffect, useState} from 'react';
import axios from "axios";

interface person {
    id:number,
    name: string
}

const PersonAdd = () => {
    const [name, setName] =  useState("");
    const user:person = {"id":1, "name": name};

    const handleSubmit = (event:any) => {
        event.preventDefault();
            addPerson();
    }

    const handleChange = (event:any) => {
        //setName(event.target.value);
       // console.log(event.currentTarget.value);
        setName(event.currentTarget.value);
    };

    const addPerson = () => {
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="tfName" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default PersonAdd;