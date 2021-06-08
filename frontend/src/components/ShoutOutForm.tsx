import { useRef } from 'react';
import { FormEvent, useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';

import ShoutOut from '../model/shoutOuts';
import "./ShoutOutForm.css";

interface Props {
    onSubmit: ( shoutOut: ShoutOut) => void
}

function ShoutOutForm({onSubmit}: Props) {
    // const [ display, setDisplay ] = useState("");
    const [ to, setTo ] = useState("");
    const [ message, setMessage ] = useState("");
    const {user} = useContext(AuthContext)
    const photoInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent): void {
        const files = photoInputRef.current?.files;
        if(files && files[0]){
            const photoFile = files[0];
            console.log(photoFile);
        }
        const shoutOut: ShoutOut = {
            to: to,
            from: user?.displayName ?? "anonymous",
            message: message
        }
        e.preventDefault();
        onSubmit(shoutOut);

        //clear form
        setTo("");
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
                    {user?.displayName}
                    {/* <input className="from" type="text" value={from} onChange={e => setFrom(e.target.value)}></input> */}
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