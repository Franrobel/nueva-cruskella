import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import instagram from '../../static/assets/icons/instagram.png'
import logoCruskella from '../../static/assets/icons/logo-cruskella.png'
import BurguerBottom from '../BurguerBottom'

export default function Navbar() {
      const [clicked, setClicked] = useState(false);

      const handleClick = (e) => {
            let anchoVentanaPx = e.view.innerWidth;
            if (anchoVentanaPx >= 768) {
                  setClicked(false)
            } else if (anchoVentanaPx < 768) {
                  setClicked(!clicked)
            }
      }

      return (
            <header >
                  <Link to='/'><img className='logo-cruskella' src={logoCruskella} alt="logo cruskella" /></Link>
                  <div className={`links ${clicked ? 'active' : ''}`}>
                        <Link to='/Menu'> <a onClick={handleClick}>Menu</a></Link>
                        <Link to='/EntregaDomicilio'><a onClick={handleClick}>Entrega a Domicilio</a></Link>
                        <Link to='/Contacto'><a onClick={handleClick}>Contacto</a></Link>
                        <Link to='https://instagram.com/lacruskella?igshid=NTc4MTIwNjQ2YQ=='><a onClick={handleClick}><img src={instagram} className='instagram' alt="logo instagram" /></a> </Link>
                  </div>
                  <div className='burguer'>
                        <BurguerBottom clicked={clicked} handleClick={handleClick} />
                  </div>
            </header>


      )
}
