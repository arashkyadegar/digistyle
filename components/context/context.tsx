import { createContext, useContext, useState } from "react";

const myAppContext = createContext({
  navbarShow: false,
  setNavbarShow: (navbarShow: boolean) => {},
  navbarW: false,
  setNavbarW: (navbarW: boolean) => {},
});

export default myAppContext;
