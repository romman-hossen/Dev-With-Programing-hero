import Friend from "./Friend";
import { use } from "react"

export default function Friends ({fetchUsers}){
    const friends = use(fetchUsers);
    console.log(friends)
    return(
        <div className="friends">
            <h3>Name : {friends.length} </h3>
            {
                friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>

    )
}