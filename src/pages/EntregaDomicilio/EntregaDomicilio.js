
import React from 'react'
import { Link } from 'react-router-dom'
import '../EntregaDomicilio/EntregaDomicilio.css'
import phone from '../../static/assets/icons/phone-icon.png'
import calendar from '../../static/assets/icons/calendar-icon.png'
import clock from '../../static/assets/icons/clock-icon.png'
import moto from '../../static/assets/icons/moto-icon.png'
import justEat from '../../static/assets/icons/just-eat-icon.png'

const deliveryInfo = [
    {
        icon: phone,
        text: "¡llamanos al 936 786 234!"
    },
    {
        icon: calendar,
        text: "de Martes a Domingos"
    },
    {
        icon: clock,
        text: "16:00 hs - 22:30 hs"
    },
    {
        icon: moto,
        text: "entrega gratis a partir de los 20 € de pedido, de lo contrario se cargar €1 por entrega"
    },
    {
        icon: justEat,
        text: "También nos encuentras en"
    },
]
export default function EntregaDomicilio() {
   const infoEntregaDomicilio = deliveryInfo.map((info, index) => {
    if(index === deliveryInfo.length-1){
        console.log(index);
    return <div className='just-eat'>
        <div style={{width: '10px'}}></div>
                <h5 >{info.text}</h5>
                <Link style={{marginTop: '12px'}} to='https://www.just-eat.es/restaurants-la-cruskella-barcelona'>
                    <img src={info.icon} alt='' />
                </Link>
            </div>
    } else {
    return <div className='each-step'>
            <img className='img-entrega' src={info.icon} alt='' />
            <h5 >{info.text}</h5>
            </div>
    }
    })
    return (
       
            <div className='entrega-container-main'>
                <div className='entrega-cont-inside'>
                    {infoEntregaDomicilio}
                </div>
            </div>
       
    )
}
