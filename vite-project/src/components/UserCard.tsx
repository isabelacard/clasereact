import type { UserCardProps } from "../types/UserType";

function UserCard({userToShow,hide}: UserCardProps) {

    return (
        <div id="user-card" className="bg-pink-400 p-3 rounded-3xl m-3 shadow-2xl hover:bg-amber-400 hover:scale-110 transition-all">
            <h2 className="font-bold text-2xl">{userToShow.username}</h2>
            {hide && <h2>{userToShow.email}</h2>}
        </div>
    );
}

export default UserCard;