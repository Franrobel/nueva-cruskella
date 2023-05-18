import React from 'react'
import fachada from '../../static/assets/images/la-cruskella-fachada1.png'

export default function Home() {
    return (
        <div style={{ backgroundColor: '#e1d348' }}>
            <div className=' flex'>
                <p className='self-center text-right text-redish text-2xl leading-8 antialiased font-light my-0 mx-8'>
                    Eiusmod aliqua est ex duis ipsum excepteur incididunt dolore ullamco voluptate magna nostrud. Aute culpa sit id nisi dolor qui. Consectetur reprehenderit deserunt nulla ipsum esse ad nulla laborum.
                    En La Cruskel·la estamos convencidos
                    que la transición hacía un modelo de
                    consumo alimentario más sostenible
                    es un reto fundamental de nuestros
                    tiempos.
                    Por eso, para hacer nuestas pizzas, elegimos  nuestros proveedores fijandonos
                    en que las materias primas sean
                    ecológicas, de proximidad,
                    artesanales y de temporada. <br />
                    Y, claro, deliciosas!
                </p>
                <img style={{ width: '100vw' }} src={fachada} alt="fachada pizzeria" />

            </div>
            <div className="w-8 h-10"></div>
            <div className=' flex'>
                <img style={{ width: '100vw' }} src={fachada} alt="fachada pizzeria" />

                <p className='self-center text-left text-2xl text-redish leading-8 antialiased font-light my-0 mx-8'>
                    La cruskel·la (transcripción del italiano cruschella)<br />
                    es lo que en España se llama salvado de trigo, la cascara del grano,
                    la parte descartada en la producción de las harinas más refinadas.
                    En el pueblo de Italia de donde venimos era utilizado,
                    y sigue siéndolo, en la elaboración de un tipo de pan tradicional,
                    al que estamos sentimentalmente atados: il Pane Casareccio di Genzano.
                </p>

            </div>
        </div>
    )
}
