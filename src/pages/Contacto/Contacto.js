import React from 'react'
import '../Contacto/Contacto.css'
import mail from '../../static/assets/icons/mail-icon.png'
import location from '../../static/assets/icons/pinMarker-icon.png'


export default function Contacto() {
  return (

    <main className='bg-redbg'>

      <div className='main-container'>
        <div className='mail-container'>
          <a id='mailto' href="mailto:lacruskella@gmail.com">
          <img className='img-mail' src={mail} alt='mail' />
          <h5 className='text-yellowish'>lacruskella@gmail.com</h5>
          </a>
        </div>
        <div className='location-container'>
          <div className='location'>
            <img className='img-location' src={location} alt='location' />
            
            <h5 className='address'>Carrer de Josep Sangenís 15, 08035 Barcelona</h5>
          </div>
          <div className='w-[750px] h-[400px] border-2 rounded-md  border-yellowish' >
            <iframe className=''
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.7039927648493!2d2.1464901153220097!3d41.4239438792608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd7f47ee5065%3A0xa8b29493c5a0c3e4!2zTGEgQ3J1c2tlbOKAomxh!5e0!3m2!1ses!2ses!4v1658494033088!5m2!1ses!2ses"
              style={{ width: 250, height: 200, border: 0 }}
              frameBorder='10'
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>

    </main>

  )
}