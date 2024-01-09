import React from 'react';
import './Pages.css'
import humedad from '../../../../assets/images/humedad.jpg';



const Humedad = () => {

    return(
        <div className="container my-5">
           <div className="row">
           <h1>Humedad</h1>
           <div className="texto col-md-8">

                    <p>
                        Desvelando los Misterios Higrométricos: Un Análisis Profundo de la Humedad Atmosférica
                   </p>
                   <br/>
                   <p>
             Adentrémonos en la esencia higrométrica de la atmósfera, donde la humedad se
             convierte en protagonista. Este fenómeno, intrínseco al comportamiento de las 
             moléculas de agua en el aire, se mide con precisión mediante parámetros como 
             la humedad relativa y la humedad específica. La interacción constante entre 
             evaporación, condensación y transporte convectivo moldea la distribución espacial
             y temporal de la humedad. Como elemento clave en la termodinámica atmosférica, la 
             humedad regula procesos climáticos y modela la formación de nubes. Este enfoque 
             técnico revela que la humedad no es simplemente vapor en el aire, sino un actor
              determinante en el intrincado guion meteorológico. 🌫️🔍
              </p>
        </div>
    
                <div className="imagen col-md-4">
                    <img src= {humedad} alt="humedad" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Humedad;
    
        

    


