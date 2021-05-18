import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ recipe }) => {
  const { idDrink, strDrink, strDrinkThumb } = recipe;

  const { setIdRecipe } = useContext(ModalContext);
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{strDrink}</h2>
        <img
          className="card-img-top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdRecipe(idDrink);
            }}
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
