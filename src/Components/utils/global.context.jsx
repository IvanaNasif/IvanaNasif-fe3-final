import { createContext, useContext, useState,useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

const themes ={
  dark: {
    theme:false,
    bgColor:'black',
    color:'white'
},
  light:{
    theme:true,
    bgColor:'white',
    color:'black'
  }
}
  const initialThemeState = themes.light
  const inicalFavState=JSON.parse(localStorage.getItem('favs')) || []


  const themeReducer =(state,action)=> {
    switch (action.type){
    case 'SWITCH_DARK':
      return themes.dark
    case 'SWITCH_LIGHT':
      return themes.light
    default:
      throw new Error
    }
  }

  const favReducer =(state,action) =>{
    switch(action.type){
      case 'ADD_FAV':
          return [...state,action.payload]
      
      default:
          throw new Error
    }
  }

const initialApiState =[]

const apiReducer =(state,action) =>{
  switch(action.type){
    case 'GET_DENTISTS':
      return action.payload
  }
}


export const ContextProvider = ({ children }) => {

const[themeState,themeDispatch] = useReducer (themeReducer, initialThemeState)
const[favStates, favDispatch] = useReducer(favReducer, inicalFavState)
const[apiState,apiDispatch] = useReducer (apiReducer, initialApiState)
//const [dentists, setDentists] = useState([])
console.log(apiState);
const url = 'https://jsonplaceholder.typicode.com/users'


useEffect(()=>{
    localStorage.setItem('favs',JSON.stringify(favStates))
},[favStates])


  useEffect (() => {
      const fetchData = async() => {
        let response = await fetch (url)
        let data = await response.json()
        apiDispatch({type:'GET_DENTISTS', payload:data})
      }
      fetchData()
  },[])
  return (
    <ContextGlobal.Provider value={{apiState,themeState,themeDispatch,favStates,favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)