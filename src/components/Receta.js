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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ recipe }) => {
  //configuracion del modal de MAterial IU
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
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal open={open}>
            <div style={modalStyle} className={clases.paper}>
              <h1>Desde modal</h1>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
