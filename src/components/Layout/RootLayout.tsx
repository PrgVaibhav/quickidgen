import React from "react";
import { Navbar } from "./Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex flex-col p-3 md:p-0  md:max-w-[60vw] m-auto ">
      <Navbar />
      <main className="md:max-w-[60vw] flex flex-col items-center justify-center ">
        {children}
      </main>
    </div>
  );
};
