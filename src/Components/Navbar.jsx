
import { Link } from 'react-router-dom'
import {routes} from '../routes'
import { useContextGlobal } from './utils/global.context'
import "../index.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState,themeDispatch} = useContextGlobal()

  const switchTheme =() =>{
    if (themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    }else{
      themeDispatch({type: 'SWITCH_LIGHT'})
    }
  }
  



    return (
      <>
      <div>
          <nav className='nav-bar'>
              <div className='img-dh'>
                <img src= "/images/DH.png" style={{width:'200px', height:'autopx'}} alt =""  />
              </div>
{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
              <div className='nav-bar-route'>
                <Link to={routes.home}><h4>Principal</h4></Link>
                <Link to={routes.favs}><h4>Favoritos</h4></Link>
                <Link to={routes.contact}><h4>Contacto</h4></Link>
            
              

{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
              <button onClick={switchTheme} className='btn-change-theme'>{themeState.theme ? '🌚' : '🌝'}</button>
              </div>
          </nav>
        </div>
        </>
    )
  }

export default Navbar