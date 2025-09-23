import {useState} from "react";
import UserCard from "../components/UserCard";
import type { User } from "../types/UserType";

function PropsPage() {
    const [showDetails, setShowDetailes] = useState(true);  //userstate

    const user: User = {
        id: 1,
        username: "Kelo",
        email: "kevin@gmail.com"
    };

    const user2: User = {
        id: 2,
        username: "Isabela",
        email: "isabela@gmail.com"
    };

    function handleClick () { //userstate cuando los oculte o los muestre
        console.log ("Me estan dando click");
        setShowDetailes (prev => !prev);
    }

    return (
        <div id="props-page-container">
            <h1>Página de Props</h1>
            <button onClick={handleClick}>presioname</button>
            <UserCard 
                userToShow={user} 
                hide={showDetails}
            />
            <UserCard 
                userToShow={user2} 
                hide={showDetails}
            />
        </div>
    );
}

export default PropsPage;