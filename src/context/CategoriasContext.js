import React, { createContext, useState, useEffect } from "react";

//CREAR CONTEXT
export const CategoriasContext = createContext();

//Provider, donde estan las funciones y el state

const CategoriasProvider = (props) => {
  //Crear el state del context
  const [categorias, setCategorias] = useState([]);

  //Ejecutar llamado a la api de categorias
  useEffect(() => {
    const getCategories = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const response = await fetch(url);
      const objectCocktails = await response.json();

      setCategorias(objectCocktails.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
