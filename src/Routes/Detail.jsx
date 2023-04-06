//import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({}) => {
      const {dentist} = useContextGlobal()
      const param = useParams()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const dentistSelected = dentist.find((dentist)=> param.id == dentist.id)
  

return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{dentistSelected.name}</h2>
      <div key={dentistSelected.id}>
              <img style={{ width: '100%', height: 'auto' }}src={window.location.origin + '/images/doctor.jpg'} alt='doctor img' />
              <h4>{dentistSelected.name}</h4>
              <h5>{dentistSelected.email}</h5>
              <h6>{dentistSelected.phone}</h6>
              <h6>{dentistSelected.website}</h6>
          </div>
    
    </>
  )

}

export default Detail

/*
  <h2>{dentistSelected.name}</h2>
      <div key={dentistSelected.id}>
              <img style={{ width: '100%', height: 'auto' }}src={window.location.origin + '/images/doctor.jpg'} alt='doctor img' />
              <h4>{dentistSelected.name}</h4>
              <h5>{dentistSelected.email}</h5>
              <h6>{dentistSelected.phone}</h6>
              <h6>{dentistSelected.website}</h6>
          </div>
*/