import { useEffect, useState } from "react";
import ShoutOut from "../model/shoutOuts";
import { readAllShoutOuts } from "../service/ShoutOutApiService";

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
return (
    <div className="ShoutOutList">
        { !shoutOutsLoaded ?
            <p className="ShoutOutList_message">Loading...</p>
            : shoutOuts.length === 0?
            <p className="ShoutOutList_message">No Shout Outs</p>
            :
            shoutOuts.map(eachShoutOut =>
            <div key={eachShoutOut._id}> To: {eachShoutOut.to} From: {eachShoutOut.from} Message: {eachShoutOut.message}</div>
            )
        }
    </div>
)

}
export default ShoutOutList;