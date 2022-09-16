import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
const [screenSize, setScreenSize] = useState(undefined)
const [bluecolor, setBluecolor] = useState('rgb(3,205,215')


  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setisClicked,handleClick,screenSize, setScreenSize,bluecolor}}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
