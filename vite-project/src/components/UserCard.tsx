import type { UserCardProps } from "../types/UserType";

function UserCard({userToShow,hide}: UserCardProps) {
    return (
        <div id="user-card">
            <h2>{userToShow.username}</h2>
            <h2>{userToShow.email}</h2>
            <p>{hide}</p>
        </div>
    );
}

export default UserCard;