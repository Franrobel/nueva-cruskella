import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import './Navbar.css'
import instagram from '../../static/assets/icons/instagram.png'
import logoCruskella from '../../static/assets/icons/logo-cruskella.png'
import BurguerBottom from '../BurguerBottom'

export default function Navbar() {
      const [ clicked, setClicked ] = useState(false);
    
     
      const handleClick = () => {
            setClicked(!clicked)
      }
      /* <Link to="/"><img  src={logoCruskella}  alt="logo cruskella" /></Link>

            <div >
                <Link to='/Menu' >Menu</Link>
                <Link to="/EntregaAdomicilio" >Entrega a Domicilio</Link>
                <Link to='/Contacto' >Contacto</Link>
                <Link to='https://instagram.com/lacruskella?igshid=NTc4MTIwNjQ2YQ=='> <img src={instagram}  alt="logo instagram" /></Link>
            </div>*/
      return (
            <header >
                  <img className='logo-cruskella' src={logoCruskella} alt="logo cruskella" />
                  <div className={`links ${clicked ? 'active' : ''}`}>
                        <a href=''>Menu</a>
                        <a href=''>Entrega a Domicilio</a>
                        <a href=''>Contacto</a>
                        <a href=''><img src={instagram} className='instagram' alt="logo instagram" /></a> 
                  </div>
                  <div className='burguer'>
                  <BurguerBottom clicked={clicked} handleClick={handleClick}/>
                  </div>
            </header>


      )
}
