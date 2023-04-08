import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      
      <p>Envianos tus consultas y nos  pondremos en contacto!</p>
      <Form/>
    </div>
  )
}

export default Contact