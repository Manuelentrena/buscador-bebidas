import React, { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  //stados del context
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });
  const [allowFecth, setAllowFecth] = useState(false);

  const { ingredient, category } = search;

  //Consultar api de receta
  useEffect(() => {
    const obtenerRecetas = async () => {
      if (allowFecth) {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
        const response = await fetch(proxy + url);
        const data = await response.json();
        setRecipes(data.drinks);
        setAllowFecth(false);
      }
    };
    obtenerRecetas();
  }, [ingredient, category, allowFecth]);

  return (
    <RecetasContext.Provider value={{ recipes, setSearch, setAllowFecth }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
