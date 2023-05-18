import React from 'react'
import './Footer.css'
import instagram from '../../static/assets/icons/instagram.png'
import ajuntament from '../../static/assets/images/ajuntament-barcelona.png'


export default function Footer() {
    //
  return (
    <footer className='footer-background' >
        <img className="instagram-footer" src={instagram} alt="logo instagram"/>
        <div className='ajuntament-container' >
        <h4 className='pr-5 text-yellowish '>Amb el support de l’ajuntament de Barcelona</h4>
        <img className='img-ajuntament' src={ajuntament}  alt="ajuntamiento barcelona"/>
        </div>
    </footer>
  )
}
