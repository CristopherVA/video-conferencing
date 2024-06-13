import React, { ReactNode } from "react";
import StreamVideoProvider from "@/provider/stream-video-client";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
      <Toaster />
    </main>
  );
};

export default RootLayout;
