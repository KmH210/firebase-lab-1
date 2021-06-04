import { FormEvent, useState } from 'react';

import ShoutOut from '../model/shoutOuts';
import "./ShoutOutForm.css";

interface Props {
    onSubmit: ( shoutOut: ShoutOut) => void
}

function ShoutOutForm({onSubmit}: Props) {
    // const [ display, setDisplay ] = useState("");
    const [ to, setTo ] = useState("");
    const [ from, setFrom ] = useState("");
    const [ message, setMessage ] = useState("");

    function handleSubmit(e: FormEvent): void {
        const shoutOut: ShoutOut = {
            to: to,
            from: from,
            message: message
        }
        e.preventDefault();
        onSubmit(shoutOut);

        //clear form
        setTo("");
        setFrom("");
        setMessage("");
    }

    return (
        <div className="PostForm">
            <h3>Leave a Shout Out</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>To<br></br>
                    <input className="to" type="text" value={to} onChange={e => setTo(e.target.value)}></input>
                    </label>
                </p>
                <p>
                    <label>From<br></br>
                    <input className="from" type="text" value={from} onChange={e => setFrom(e.target.value)}></input>
                    </label>
                </p>
                <p>
                    <label>Shout Out<br></br>
                    <textarea className="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </label>
                </p>
                <p>
                    <button type="submit">Submit Shout Out!</button>
                </p>
            </form>
        </div>
    )
}

export default ShoutOutForm;