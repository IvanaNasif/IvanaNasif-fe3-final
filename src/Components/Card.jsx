import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ( {dentist}) => {
  const {favDispatch} = useContextGlobal()

  const addFav = () => {
    favDispatch({ type: 'ADD_FAV', payload: dentist });
    alert("Se agregó a favoritos correctamente.");
  }


    
  return (
    <>
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            <Link key={dentist.id} to={'Detalles/' + dentist.id}>
              <div>
                  <img style={{ width: '100%', height: 'auto' }} src={"./images/doctor.jpg" } alt='doctor img' />
                  <h4>{dentist.name}</h4>
                  <h5>{dentist.username}</h5>
                </div>
            </Link>
            
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">⭐</button>
        </div>
    </>
  );
};

export default Card;


