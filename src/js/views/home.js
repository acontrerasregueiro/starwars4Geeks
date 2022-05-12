import React, { useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { PlanetCard } from "../component/planetCard";


export const Home = () => {
  
  const { store, action } = useContext(Context);

  
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-danger">PERSONAJES</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.personajes?.map((obj, i) => {
            return (
              <Card
                i={i}
                key={obj.name}
                name={obj.name}
                gender={obj.gender}
                mass={obj.mass}
                height = {obj.height}
                skin_color = {obj.hair_color}
                skin_face = {obj.skin_face}
              />
            );
          })}
        </div>
      </div>
      <div className="row">
        <h1 className="text-danger mt-3">PLANETAS</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.planetas?.map((obj, i) => {
            return(
            <PlanetCard 
            key={obj.name} 
            name={obj.name} 
            climate={obj.climate} 
            terrain ={obj.terrain}
            />
            );
          })}
        </div>
      </div>
    </div>
  );
};
