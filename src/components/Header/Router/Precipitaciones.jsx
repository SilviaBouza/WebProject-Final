import React from 'react';
import './Pages.css'
import precipitaciones from '../../../../assets/images/precipitaciones.jpeg';



const Precipitaciones = () => {

    return (
        <div className="container my-5">
            <div className="precipitaciones row">
                <h1>Precipitaciones</h1>
                <div className="texto col-md-8">
                    <p>
                        Explorando la Dinámica Atmosférica: Un Análisis Profundo de las Precipitaciones
                    </p>

                    Adentrémonos en la compleja maquinaria meteorológica para descifrar las
                    precipitaciones, fenómeno intrincado que revela el juego armonioso entre factores
                    atmosféricos. La condensación de la humedad en las nubes, desencadenada por
                    cambios de temperatura y presión, da origen a la formación de gotas y cristales de
                    hielo. Este proceso, esencialmente un fenómeno termodinámico, desencadena la
                    caída gravitacional de las partículas, manifestándose como lluvia, nieve o granizo.
                    <br />
                    <p>
                        <br />
                        En este ballet meteorológico, la topografía, la humedad relativa y los vientos juegan
                        papeles cruciales. Observamos que las precipitaciones son una respuesta dinámica a
                        las complejidades de la atmósfera, actuando como un regulador fundamental en el
                        equilibrio climático. Este análisis técnico nos permite apreciar las precipitaciones
                        como eventos no solo estéticos, sino como manifestaciones intrincadas de las leyes
                        físicas que rigen nuestra atmósfera. 🌦️🔍
                    </p>
                </div>


                <div className="imagen col-md-4">
                    <img src={precipitaciones} alt="lluvia" className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}

export default Precipitaciones;

