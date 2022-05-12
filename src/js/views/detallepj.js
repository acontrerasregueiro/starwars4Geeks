import propTypes from "prop-types";
import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // este hook captura el parametro de Ruta
import { Context } from "../store/appContext";

function filterbyname(nombre) {
  return;
}

export const DetallePj = (props) => {
  const { store } = useContext(Context);
  const parametroRuta = useParams();

  return (
    <div className="container">
      <div className="card">
        <div className="col">
			
          <div className="col-5 float-start mt-3" style={{ background: "grey", height: "300px" }}>
            <h5>PICTURE </h5>
          </div>
          <div className="col-1 float-end">
            <p></p>
          </div>
          <div className="col-5 float-end mt-3">
              {" "}
			  <h4 className="card-title">{store.personajes[parametroRuta.indice].name}</h4>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card-block px-2">
          <table className="table text-danger mt-3">
  <thead>
    <tr>
	  <th scope="col">Name </th>
      <th scope="col">Gender</th>
      <th scope="col">Height</th>
      <th scope="col">Mass</th>
      <th scope="col">Skin color</th>
	  <th scope="col">Hair color</th>
    </tr>
  </thead>
  <tbody>
    <tr>    
      <td>{store.personajes[parametroRuta.indice].name}</td>
      <td>{store.personajes[parametroRuta.indice].gender}</td>
      <td>{store.personajes[parametroRuta.indice].height}</td>
	  <td>{store.personajes[parametroRuta.indice].mass}</td>
      <td>{store.personajes[parametroRuta.indice].skin_color}</td>
      <td>{store.personajes[parametroRuta.indice].hair_color}</td>
    </tr>


  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  );
};
