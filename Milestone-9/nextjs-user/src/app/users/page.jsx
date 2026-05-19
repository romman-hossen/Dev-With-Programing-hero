import UsersData from "@/components/UsersData";
import { getUsers } from "../lib/data";
import { CreateUser, DeleteUser } from "../action";
import AddUserModal from "@/components/AddUserModal";

const UsersPage =async () => {
    const userData =await getUsers();
    console.log('yse',userData)
    return (
        <div>
            <div className="flex justify-between items-center">
            <h2 className="text-2xl r my-6 text-green-500">Users Management : {userData.length}</h2> 
            <AddUserModal addUserAction={CreateUser}/>
            </div>
            <UsersData userData={userData} deleteUserAction={DeleteUser}/>  
        </div>
    );
};

export default UsersPage;