import UserCard from "../components/UserCard";
import type { User } from "../types/UserType";

function PropsPage() {
    const user: User = {
        id: 1,
        username: "Kelo",
        email: "kevin@gmail.com"
    };

    return (
        <div id="props-page-container">
            <h1>Página de Props</h1>
            <UserCard 
                userToShow={user} 
                hide={false}
            />
        </div>
    );
}

export default PropsPage;