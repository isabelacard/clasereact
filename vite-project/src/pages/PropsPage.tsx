import {useEffect, useState} from "react";
import UserCard from "../components/UserCard";
import type { User } from "../types/UserType";

function PropsPage() {
    const [showDetails, setShowDetailes] = useState(true);  //userstate

    //-------------- JSON -----------------------
    const [users, setUsers] = useState<User[]>([]);
    const [recap, setRecap] = useState(0);

    useEffect (() => {
        async function getUsers () {
            const data = await fetch ("/data/users.json");
            const users = await data.json();
            setUsers(users);
        }

        getUsers();
    },[recap]); 
    //-------------------------------------

    function handleClick () { //userstate cuando los oculte o los muestre
        console.log ("Me estan dando click");
        setShowDetailes (prev => !prev);
    }

    function getInfo () {
        setRecap(prev => prev+1);
    }

    return (
        <div id="props-page-container">
            <h1>Página de Props</h1>
            <button onClick={getInfo}>Solicitar info</button>
            <button onClick={handleClick}>presioname</button>
            {
                users.map(user => (
                    <UserCard 
                        userToShow={user}
                        hide={showDetails}
                    />
                ))
            }
        </div>
    );
}

export default PropsPage;