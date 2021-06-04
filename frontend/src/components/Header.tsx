import {useContext} from "react";
import {AuthContext} from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

function Header() {
    const {user} = useContext(AuthContext);
    return(
        <header className= "Header">
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signOut}>Sign out</button>
            {user && <div>
                <p>Welcome, {user.displayName}!</p>
                {!!user.photoURL && <img src= {user.photoURL} alt="" />}
                </div>}
        </header>
    );
}

export default Header;