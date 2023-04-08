import React from "react";

import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


    let favs = localStorage.getItem('favs')
    let parsedFavs = JSON.parse(favs)
  



  return (
    <>
      <h1>Favoritos</h1>
      <div className="card-grid">
          {parsedFavs.map(dentist => (<Card dentist={ dentist}/> ))} 
        </div>
    </>
  )
          
}

export default Favs
