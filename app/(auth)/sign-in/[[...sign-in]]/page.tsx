import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <SignIn />
    </main>
  );
};

export default SignInPage;
