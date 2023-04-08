import Card from '../Components/Card'
import { useContextGlobal} from '../Components/utils/global.context' 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {apiState} = useContextGlobal()
  

  return (
    <main className="" >
  
      <h1>Principal</h1>
    <div>

    <div className='card-grid'>
        {apiState.map(dentist => 
        <div key={dentist.id}> 
        <Card dentist={dentist}/>
        </div>)}
    </div>  
    </div>

    </main>
  )
}

export default Home





