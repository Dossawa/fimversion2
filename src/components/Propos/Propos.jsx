import React from 'react'
import './Propos.css'
import marquage from './../../assets/marquage.png'
import forage from './../../assets/forage.jpg'
const Propos = () => {
  return (
    <div className='propos'>
        <h1>Qui sommes nous ?</h1>
        <p>FIM EST LA PREMIÈRE STRUCTURE SPÉCIALISÉE DANS LE TRAITEMENT D'EAU EN CÔTE D'IVOIRE.</p>
        <div className="box">

        <div className="box1">
            <div className='box-content'>
                <h3>Equipements de MARQUAGE</h3>
                <p>
                Spécialiste du marquage dans tous les secteurs industriels que ce soit l'agroalimentaire, 
                l'automobile, le pharmaceutique ou encore l'extrusion plastique, 
                nos machines de marquage jet d'encre ou laser sont présentes dans tout le secteurs d'activités.
                </p>
            </div>
            <div className='box-content b1'>
                <img src={marquage} alt="" style={{width :"100%",height :"400px", objectFit:"cover"}} />
            </div>
        </div>
        <div className="box2">
        <div className='box-content'>
                <h3>Equipements de traitement d'eau</h3>
                <p>FIM répond à tous vos besoins industriels :
                <ul>
                    <li>équipements de convoyage</li>
                    <li>Osmosseurs</li>
                    <li>Filtres industriels</li>
                    <li>équipements de marquage</li>
                </ul>
                </p>
            </div>
        <div className='box-content b2'>
        <img src={forage} alt="" style={{width :"100%",height :"100%"}} />
        </div>
        </div>  
        </div>
    </div>
  )
}

export default Propos