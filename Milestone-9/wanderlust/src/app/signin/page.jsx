'use client'
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
import { redirect } from "next/navigation";
const SignInPage = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const obj = Object.fromEntries(new FormData(e.target).entries())
        // Pa$$w0rd!
        const {data,error} = await authClient.signIn.email({
            email: obj.email,
            password: obj.password,
        })
        if(error)
        {
            alert(error.code);
            return;
        }
        if(data){
            alert('Login Successful !!')
            redirect('/')
        }
    }
    return (
          <div className="mx-auto max-w-7xl my-20 space-y-3">
              <div className="flex flex-col gap-3 text-center">
                <h3 className="font-utile text-5xl font-extrabold">Welcome Back</h3>
                <p className="text-lg text-gray-500">
                   Resume your adventure with Wanderlust</p>
              </div>
              <Card className="shadow-xl p-10 bg-gray-50">
                <Form className="flex max-w-96 flex-col gap-4" onSubmit={onSubmit}>
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
                      Sign In
                    </Button>
                  </div>
                </Form>
              </Card>
            </div>
    );
};

export default SignInPage;