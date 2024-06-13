import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
