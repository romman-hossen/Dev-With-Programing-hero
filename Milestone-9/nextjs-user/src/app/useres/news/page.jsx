"use client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const NewsPage = () => {
    const onSubmit =async (e) =>{
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formdata.entries());
        console.log("newUser",newUser)
        
        const req = await fetch('http://localhost:8000/profile',{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(newUser)

        })
        const createdUser = await req.json();
        console.log("created user",createdUser);
        if(req.success){
            alert('User Created Successful');
            redirect('/useres');
            
        }
    
        
    }
    return (
        <div>
          <h2>Create  a new User</h2>
          <Form className="w-full max-w-96" onSubmit={onSubmit} >
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Create User
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
              
        </div>
    );
};

export default NewsPage;