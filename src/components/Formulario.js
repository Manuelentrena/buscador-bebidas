import React, { useContext, useRef } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  //Referenccia al input y select
  const refName = useRef(null);
  const refCategory = useRef(null);

  //Extraemos categorias de usecontext
  const { categorias } = useContext(CategoriasContext);
  const { setSearch, setAllowFecth } = useContext(RecetasContext);

  //Funcion para leer el form
  const getIngredientsCocktail = (e) => {
    e.preventDefault();
    setAllowFecth(true);
    setSearch({
      ingredient: refName.current.value,
      category: refCategory.current.value,
    });
  };

  return (
    <form onSubmit={getIngredientsCocktail} className="col-md-12">
      <fieldset className="text-center">
        <legend>Bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            ref={refName}
          ></input>
        </div>
        <div className="col-md-4">
          <select ref={refCategory} className="form-control" name="categoria">
            <option value="">-- Selecciona Categoria --</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
