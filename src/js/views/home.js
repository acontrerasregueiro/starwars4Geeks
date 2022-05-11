import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
export const Home = () => {
  const { store, action } = useContext(Context);
  return (
    <div className="container overflow-x">
      <h2 className="font-weight-light text-danger">Personajes</h2>

        {store.personajes?.map((obj, i) => {
          return <Card key={obj.name} name={obj.name} gender={obj.gender} />;
        })}

    <h2 className="font-weight-light text-danger" key="pl">Planetas</h2>
      
        {store.planetas?.map((obj, i) => {
          return <Card key={obj.name}name={obj.name} gender={obj.gender} />;
        })}
   
    </div>
    
    
  );
};
