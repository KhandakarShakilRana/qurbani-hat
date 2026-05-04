"use client";

import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function Basic() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
    name: userData.name,
    email: userData.email , 
    password: userData.password,
    image : userData.avatar, 
    callbackURL : process.env.BETTER_AUTH_URL
});
if (error) {
  toast.error(error.message || "Signup failed");
  return;
}
toast.success("Account created successfully!");
router.push("/login");

  };

  return (
    <div className="bg-[#F1F2ED] flex justify-center p-6">
      <Form className="flex w-96 flex-col gap-4 text-[#213D34] shadow-xl p-6 rounded-2xl" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="john Doe" className="bg-gray-200" />
        <FieldError />
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
        <Label>Email</Label>
        <Input placeholder="john@example.com" className="bg-gray-200" />
        <FieldError />
      </TextField>
<TextField
        isRequired
        name="avatar"
        type="text"
      >
        <Label>Avatar</Label>
        <Input placeholder="please paste your avater link" className="bg-gray-200" />
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
        <Input placeholder="Enter your password" className="bg-gray-200" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      

      <div className="flex gap-2">
        <Button className="bg-[#213D34]" type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    </div>
  );
}