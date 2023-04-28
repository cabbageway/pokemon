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
            <h2 className="m-5">Put Request um eine Person zu adden</h2>
            <form className="m-5" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="tfName">Person Name
                </label>
                <input className="form-control" type="text" name="tfName"
                       onChange={handleChange} id="tfName"/>
                </div>
                    <button className="btn btn-secondary mt-1" type="submit">Add</button>
            </form>
        </div>
    );
};

export default PersonAdd;