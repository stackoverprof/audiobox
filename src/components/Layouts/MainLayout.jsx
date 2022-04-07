import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <main className="flex-sc col w-full">
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
