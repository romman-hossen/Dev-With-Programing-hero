import { UpdateUser } from "@/app/action";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";

const UsersEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId)
  console.log(userId);
  const handleUpdateUser =async (formdata) =>{
    'use server';
    return UpdateUser(userId,formdata);
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2xl text-gray-500">Editing User: </h2>
      <div className="w-1/2 mx-auto">
        <form action={handleUpdateUser} className="flex flex-col gap-4">
          <TextField className="w-full" name="name" defaultValue={user.name} type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField className="w-full" name="email" defaultValue={user.email} type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField className="w-full" name="role" defaultValue={user.role} type="text">
            <Label>Role</Label>
            <Input placeholder="Enter your Role" />
          </TextField>
          {/* <TextField className="w-full" name="company">
                                  <Label>Company</Label>
                                  <Input placeholder="Enter your company name" />
                                </TextField>
                                <TextField className="w-full" name="message">
                                  <Label>Message</Label>
                                  <Input placeholder="Enter your message" />
                                </TextField> */}
          <div className="flex gap-2">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Add User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersEditPage;
