import UsersData from "@/components/UsersData";
import { getUsers } from "../lib/data";

const UsersPage =async () => {
    const userData =await getUsers();
    console.log('yse',userData)
    return (
        <div>
            <h2 className="text-2xl text-center my-6 text-green-500">Users length : {userData.length}</h2>  
            <UsersData userData={userData}/>  
        </div>
    );
};

export default UsersPage;