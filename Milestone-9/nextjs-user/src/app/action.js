import { revalidatePath } from "next/cache";

export const DeleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:5001/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log("this is data ", data);
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  return data;
};

export const CreateUser = async (formData) => {
  "use server";
  const newUser = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:5001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
  });
  const data = await res.json();
  console.log("After added data here is the data",data)
  if(data.insertedId){
    revalidatePath("/users");
  }
  return data;
};
