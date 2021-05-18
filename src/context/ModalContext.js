import React, { useState, useEffect, createContext, useContext } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idRecipe, setIdRecipe] = useState(null);
  return (
    <ModalContext.Provider value={{ setIdRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
