import React, {ReactNode, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PokeTeam from "./views/pokeTeam/PokeTeam";
import {pokeData} from "./common/models/mockData";
import {pokemon} from "./common/models/pokemon";
import PokeForm from "./views/PokeForm/PokeForm";
import PokeDetails from "./views/PokeDetails/PokeDetails";

import PersonView from "./views/PersonView/PersonView";
import PersonAdd from "./views/PersonAdd/PersonAdd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./views/pages/Hompage";
import Blog from "./views/pages/Blog";


export enum AppViews {
    PokeOverview = 1,
    PokeAdmin,
    PokeDetails,
    LoadPersons,
    AddPerson
}

function App() {

   //const [selectedView, setSelectedView] = useState<AppViews>(AppViews.PokeOverview)
   const [selectedView, setSelectedView] = useState<AppViews>(AppViews.LoadPersons);
   //const [selectedView, setSelectedView] = useState<AppViews>(AppViews.AddPerson);

    let [pokeTeam, setPokemons] = useState<pokemon[]>(pokeData)

    const del = (id:number) => {
            console.log("delete Button gedrückt");
            console.log(id);
        const updatedPokes = pokeTeam.filter(poke => poke.pokeIndex !== id)
        setPokemons(updatedPokes)
    }

    const switchToForm =  () => {
        setSelectedView(AppViews.PokeAdmin);
    }

    const switchAddPerson =  () => {
        setSelectedView(AppViews.AddPerson);
    }
    const switchToPokeTeam = () => {
        setSelectedView(AppViews.PokeOverview);
    }

    let [detailedPoke, setdetailedPoke] = useState(pokeTeam[0]);

    const showPokeDetails = (poke:pokemon) => {
        console.log(poke);
        let poke1 = pokeTeam.find ( (value, index, obj) => {
            return (value == poke);
        })
        if (poke1 != undefined) {
            // @ts-ignore
            setdetailedPoke(poke);
        }
        setSelectedView(AppViews.PokeDetails);
    }


    const onSave = (item:pokemon) => {
        console.log("bin hier " + item);
        item.pokeIndex = pokeTeam.length + 1;
        pokeTeam = [...pokeTeam, item];
        setPokemons(pokeTeam);

    }
    // @ts-ignore
    const renderSelectedView = (): ReactNode => {
        switch (selectedView) {
            case AppViews.PokeOverview:
                return (
                    <PokeTeam pokeTeam={pokeTeam} deleteRow={del}  switchToForm={switchToForm} showPokeDetails={showPokeDetails}/>
                )
            case AppViews.PokeAdmin:
                return (
                    <PokeForm toPokeTeam={switchToPokeTeam} onSave={onSave} />
                )
            case AppViews.PokeDetails:
                return (
                    <PokeDetails detailedPoke={detailedPoke} toPokeTeam={switchToPokeTeam}/>
                )
        }
    };


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}>
                  <Route path="blogs" element={<Blog/>}/>
                  <Route path="personView" element={<PersonView onclick={switchAddPerson}/>}/>
                    <Route path="personAdd" element={<PersonAdd />}/>

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
