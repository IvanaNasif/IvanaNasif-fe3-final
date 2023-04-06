import React from "react";
import { Link } from "react-router-dom";


const Card = ( {dentist}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    
      <div className="card">
          {/* En cada card deberan mostrar en name - username y el id */}
          <Link key={dentist.id} to={'Detalles/' + dentist.id}>
            <div>
                <img style={{ width: '100%', height: 'auto' }} src={"./images/doctor.jpg" } alt='doctor img' />
                <h4>{dentist.name}</h4>
                <h5>{dentist.username}</h5>
              </div>
      
              </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  
  );
};

export default Card;


