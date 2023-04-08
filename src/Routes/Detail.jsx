//import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
      const {dentists} = useContextGlobal()
      const param = useParams()
      const dentistSelected = dentists.find((dentist)=> param.id == dentist.id)


return (
    <>
      <h1>Detalles</h1>
      
  
  <table>
    <tbody>
      <tr>
        <td>Name: {dentistSelected.name}</td>
        <td>Email: {dentistSelected.email}</td>
        <td>Phone: {dentistSelected.phone}</td>
        <td>Website: {dentistSelected.website}</td>
      </tr>
    </tbody>
  </table>
</>
  )

}

export default Detail

