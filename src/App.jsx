import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Components/NotFound";
import { routes } from './routes'



function App() {
  //const handleClick =()=>{}
  return (
      <div className="App">
    
        <Navbar/>
        <Routes>
          <Route path={routes.home} element ={<Home />}/>
          <Route path={routes.favs} element ={<Favs/>}/>
          <Route path={routes.detail}element={<Detail/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;


