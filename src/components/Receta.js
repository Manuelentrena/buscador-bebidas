import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 450,
    },
    maxHeight: 500,
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ recipe }) => {
  //configuracion del modal de Material IU
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const clases = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { idDrink, strDrink, strDrinkThumb } = recipe;

  const { infoRecipe, setIdRecipe } = useContext(ModalContext);

  const showIngredients = (infoRecipe) => {
    if (infoRecipe) {
      let ingredientes = [];
      for (let i = 1; i < 16; i++) {
        if (infoRecipe[`strIngredient${i}`]) {
          ingredientes.push(
            <li key={i}>
              {infoRecipe[`strIngredient${i}`]} {infoRecipe[`strMeasure${i}`]}
            </li>
          );
        }
      }
      console.log(ingredientes[0]);
      return ingredientes;
    }
  };

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
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              handleClose();
            }}
          >
            {open ? (
              <div style={modalStyle} className={clases.paper}>
                <h2>{infoRecipe?.strDrink}</h2>
                <h3 className="mt-4">Instrucciones</h3>
                <p className="mt-4">{infoRecipe?.strInstructions}</p>
                <img
                  className="img-fluid my-4"
                  src={infoRecipe?.strDrinkThumb}
                  alt={`Bebida de ${infoRecipe?.strDrink}`}
                />
                <h3>Ingredientes y Cantidades</h3>
                {showIngredients(infoRecipe)}
              </div>
            ) : null}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
