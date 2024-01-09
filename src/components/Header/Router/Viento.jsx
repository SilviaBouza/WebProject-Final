import React from 'react';
import './Pages.css';
import dandelion from '../../../assets/images/dandelion.jpg'



const Viento = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <h1>Viento</h1>
                <div className="texto col-md-8">
                    <p>
                     La Danza Cósmica de las Corrientes Atmosféricas:Un Enfoque Riguroso sobre el Viento

                    <p/>
                    Adentrémonos en el intricado fenómeno del viento, producto de las diferencias de
                    presión atmosférica. Las corrientes resultantes de la transferencia de energía cinética 
                    entre áreas de alta y baja presión desatan un ballet cósmico en la atmósfera. La
                    intensidad y dirección del viento se rigen por la ley de gradientes de presión y la 
                    fuerza de Coriolis, factores que, en armonía, dan vida a las complejidades 
                    meteorológicas. Este enfoque riguroso revela que el viento no es solo una brisa
                     casual, sino una manifestación precisa de las fuerzas dinámicas que gobiernan 
                     nuestro sistema climático. 🌬️🔬</p>
                                       
                </div>
                <div className="imagen col-md-4">
                    <img src={dandelion} alt="Vientos" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Viento;  