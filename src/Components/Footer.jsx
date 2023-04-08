import React from 'react'
import {useNavigate} from  'react-router-dom'

const Footer = () => {
  
  const navigate = useNavigate()

  return (
  <>
  <section className='return'>
  <button className='btn-return'onClick={()=> navigate(-1)}>Volver a pagina Anterior</button>

  </section>
    <footer>
            <p>Powered by</p>
            <img src='/images/DH.png' alt='DH-img'/>
            <div className='footer-social'>
              <img src='/images/ico-facebook.png' alt='facebook'style={{width:'30px', height:'auto'}} />
              <img src='/images/ico-instagram.png' alt='instagram'style={{width:'30px', height:'auto'}} />
              <img src='/images/ico-whatsapp.png' alt='whatsapp'style={{width:'30px', height:'auto'}} />
              <img src='/images/ico-tiktok.png' alt='tiktok'style={{width:'30px', height:'auto'}}/>
            </div>
    </footer>
  </>
  )
}

export default Footer
