import Card from '../Components/Card'
import { useContextGlobal} from '../Components/utils/global.context' 
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {dentists} = useContextGlobal()
  

  return (
    <main className="" >
  
      <h1>Home</h1>
    <div>

        <div className='card-grid'>
        {dentists.map(dentist => <Link key={'dentist.id'} to={'/dentist' + dentist.id}>
        <Card dentist={ dentist}/></Link>)}
    </div>  
    </div>

    </main>
  )
}

export default Home





