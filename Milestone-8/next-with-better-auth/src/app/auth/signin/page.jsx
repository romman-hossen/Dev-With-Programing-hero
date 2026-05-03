"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: fData.email, // required
      password: fData.password, // required
      rememberMe: true,
    //   callbackURL: "",
    });
    // console.log(data, error);
    if(!data){
        alert(error.message || "An error occurred during sign-in. Please try again.");
    }
    if(data){
        alert("Sign-in successful! Welcome back.");
    }
    console.log(data, error,'This is sign in data for user ')

  };
  return (
    <div>
      <h2>Sign In page </h2>
      <Form className="flex w-96 flex-col gap-4 " onSubmit={onSubmit}>
        {/* Email */}
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
          <Label>Email</Label>
          <Input placeholder="Enter your Email" />
          <FieldError />
        </TextField>
        {/* password */}
        <TextField className="w-full" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full "
              type={isVisible ? "text" : "password"}
              //   value={isVisible ? "87$2h.3diua" : "••••••••"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
