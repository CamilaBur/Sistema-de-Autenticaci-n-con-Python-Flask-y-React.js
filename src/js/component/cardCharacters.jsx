import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = ({nombre, genero, id}) => {
  const {actions} = useContext(Context)


	return (
			<div className="card d-flex mx-3 my-3 bg-warning" style={{width: "18rem", height:"32rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id)+".jpg"}
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-title">Gender: {genero}</p>
    
    <Link to={"/viewCharacters/"+id} className="btn btn-primary">Detalles de personaje:{id}</Link>
    <button className="btn text-danger" onClick={()=>actions.agregarFavorito(nombre)}><i className="fa fa-heart"> </i></button>
    
  </div>
</div>
	);
};