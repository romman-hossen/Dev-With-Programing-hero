export const DeleteUser = async(userId) => {
     'use server'
    const res = await fetch (`http://localhost:5001/users/${userId}`,{
        method : 'DELETE'
    });
    const data =await res.json();
    console.log("this is data ", data)
    return data;
}