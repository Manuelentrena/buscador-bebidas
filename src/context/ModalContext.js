import React, { useState, useEffect, createContext, useContext } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipe, setRecipe] = useState(null);

  //Una vez tenemos una recepa, llamamos a la API por ID

  useEffect(() => {
    const getRecipebyID = async () => {
      if (idRecipe !== null) {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const url = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
        const response = await fetch(proxy + url);
        const data = await response.json();
        setRecipe(data.drinks[0]);
      }
    };

    getRecipebyID();
  }, [idRecipe]);

  return (
    <ModalContext.Provider value={{ setIdRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
