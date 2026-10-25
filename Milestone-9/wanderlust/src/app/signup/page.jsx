"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    console.log("This is users data",user)
    const {data,error} = await authClient.signUp.email({
      name: user.name,
      image: user.image,
      email: user.email,
      password: user.password ,   
    })
    if(error){
      alert(error.message);
      return;
    }
    if(data){
      alert("signUp successfull!!")
      router.push('/')
    }
  }
  return (
    <div className="mx-auto max-w-7xl my-20">
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-utile text-5xl ">Create Account</h3>
        <p className="text-lg text-gray-500">
          Start your adventure with Wanderlust
        </p>
      </div>
      <Card className="shadow-xl p-10 ">
        <Form className="flex max-w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input placeholder="Enter Your Name" />
          </TextField>
           <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Enter a Image Url" />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email Address</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Create a password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>   
          <div className="">
            <Button type="submit" className={"min-w-full bg-cyan-500"}>
              Create Account
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
export default SignUpPage;
