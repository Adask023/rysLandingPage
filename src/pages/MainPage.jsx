import React from "react";
import { Navigation } from "../components/Navigation";

export const MainPage = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
