import propTypes from "prop-types";
import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // este hook captura el parametro de Ruta
import { Context } from "../store/appContext";

export const DetallePlaneta = (props) => {
  const { store } = useContext(Context);
  const parametroRuta = useParams();

  return (
    <div className="container">
      <div className="card">
        <div className="col">
          <div
            className="col-5 float-start mt-3"
            style={{ background: "grey", height: "300px" }}
          >
            <h5>PICTURE </h5>
          </div>
          <div className="col-1 float-end">
            <p></p>
          </div>
          <div className="col-5 float-end mt-3">
            {" "}
            <h4 className="card-title">
              {store.planetas[parametroRuta.indice].name}
            </h4>
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
                  <th scope="col">Climate</th>
                  <th scope="col">Terrain</th>
                  <th scope="col">Diameter</th>
                  <th scope="col">Gravity</th>
                  <th scope="col">Surface water</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>{store.planetas[parametroRuta.indice].name}</td>
                  <td>{store.planetas[parametroRuta.indice].climate}</td>
                  <td>{store.planetas[parametroRuta.indice].terrain}</td>
                  <td>{store.planetas[parametroRuta.indice].diameter}</td>
                  <td>{store.planetas[parametroRuta.indice].gravity}</td>
                  <td>{store.planetas[parametroRuta.indice].surface_water}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
