import React, { useEffect, useState } from "react";
import ShoutOut from "../model/shoutOuts";
import { readAllShoutOuts, deleteShoutOut, createShoutOut } from "../service/ShoutOutApiService";
import Header from "./Header";
import ShoutOutCard from "./ShoutOutCard";
import ShoutOutForm from "./ShoutOutForm";
import './ShoutOutList.css';

function ShoutOutList() {
    const[shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);
    const[shoutOutsLoaded, setShoutOutsLoaded] = useState(false);


useEffect(() => {
    loadShoutOuts();
}, []);

function loadShoutOuts() {
    readAllShoutOuts().then(shoutOutsFromApi => {
        setShoutOuts(shoutOutsFromApi);
        setShoutOutsLoaded(true);
    });
}

function handleAddShoutOut(shoutOut: ShoutOut): void {
    createShoutOut(shoutOut).then(loadShoutOuts)
}

function handleDeleteShoutOut(shoutOutId: string): void{
    deleteShoutOut(shoutOutId).then(loadShoutOuts);
}


return (
    <div className="ShoutOutList">
        <Header/>
    <h1>Shout Outs PRACTICE TRIAL</h1>
        { !shoutOutsLoaded ?
            <p className="ShoutOutList_message">Loading...</p>
            : shoutOuts.length === 0?
            <p className="ShoutOutList_message">No Shout Outs</p>
            :
            shoutOuts.map(eachShoutOut =>
            <ShoutOutCard key={eachShoutOut._id} shoutOut= {eachShoutOut} onDelete={() => handleDeleteShoutOut(eachShoutOut._id!)}
            />)
      }
        <ShoutOutForm onSubmit={handleAddShoutOut}/>
    </div>
)

}
export default ShoutOutList;