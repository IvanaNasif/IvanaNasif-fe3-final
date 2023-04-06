import { createContext, useContext, useState,useEffect } from "react";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect (() => {
      const fetchData = async() => {
        let response = await fetch (url)
        let data = await response.json()
        setDentists(data)
      }
      fetchData()
  },[])
  return (
    <ContextGlobal.Provider value={{dentists, setDentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)