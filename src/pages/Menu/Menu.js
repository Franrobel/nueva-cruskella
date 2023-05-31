import React from 'react'
import '../Menu/Menu.css'
import carta from '../../static/cartaMenu'
import instagram from '../../static/assets/icons/instagram.png'
import paletasCruskella from '../../static/assets/icons/paletas-cruskella.png'

export default function Menu () {
  const { entrantes, pizzas, postres } = carta[0]
  console.log("entrantes", entrantes);

  
  const listaEntrantes = entrantes.map((entrante, index) => {
    return (
      <div className='inside-listado'>
        <div className='each-item'>
          <div className='item-name'>
            <h2 >{entrante.nombre}</h2>
            { entrante.gluttenFree &&  <img title="Vegano" style={{ width: "24px" }} src={instagram} alt='' /> }
          </div>
          <p>{entrante.precio}</p>
        </div>

        <p style={{marginRight: '3.5rem'}}>{entrante.ingredientes}</p>


      </div>)
  })
  const listaPizzas = pizzas.map((pizza, index) => {
    return (
      <div className='inside-listado'>
        <div className='each-item'>
          <div className='item-name'>
            <h2 >{pizza.nombre}</h2>
           { pizza.gluttenFree && <img title="Vegano" style={{ width: "24px" }} src={instagram} alt='' />}
          </div>
          <p>{pizza.precio}</p>
        </div>
        <div className='ingredientes-pizzas'>
          <p style={{marginRight: '1.5rem' }}>{pizza.ingredientes}</p>
          <p style={{alignSelf: 'end'}} >(extra)</p>
        </div>
      </div>)
  })
  const listaPostres = postres.map((postre, index) => {
    return (
      <div className='inside-listado'>
        <div className='each-item'>
          <div className='item-name'>
            <h2 >{postre.nombre}</h2>
            <img title="Vegano" style={{ width: "24px" }} src={instagram} alt='' />
          </div>
          <p>{postre.precio}</p>
        </div>

        <p style={{marginRight: '3.5rem'}}>{postre.ingredientes}</p>


      </div>)
  })

  return (
      <main className='bg-redbg'>
        <div className='intro-listado'>
          <img src={paletasCruskella} alt='' />
          <h2>ENTRANTES</h2>
        </div>
        <div className='listado' >

          {listaEntrantes}
        </div>
        <div className='intro-listado'>
          <img src={paletasCruskella} alt='' />
          <h2>PIZZAS</h2>
        </div>
        <div className='listado' >

          {listaPizzas}
        </div>
        <div className='intro-listado'>
          <img src={paletasCruskella} alt='' />
          <h2>POSTRES</h2>
        </div>
        <div className='listado' >

          {listaPostres}
        </div>
      </main>
  )
}

 