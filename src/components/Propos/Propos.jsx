import React from 'react'
import './Propos.css'
import marquage from './../../assets/marquage.png'
import filtrepure from './../../assets/filtrepure.jpg'
import forage from './../../assets/forage.jpg'
import marquagecos from './../../videos/marquagecos.mp4'
const Propos = () => {
  return (
    <div className='propos' id='propos'>
        <h1>Qui sommes nous ?</h1>
        <p>FIM EST LA PREMIÈRE STRUCTURE SPÉCIALISÉE DANS LE TRAITEMENT D'EAU ET LE MARQUAGE INDUSTRIEL EN CÔTE D'IVOIRE .</p>
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
            <div className='b1'>
            <video className='videoTag2' autoPlay loop muted>
            <source src={marquagecos} type='video/mp4' />
            </video>
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
                    <li>pompes électriques</li>
                </ul>
                </p>
            </div>
        <div className='b2'>
        <img src={filtrepure} alt="" style={{width :"100%",height :"400px", objectFit:"cover"}} />
        </div>
        </div>  
        </div>
    </div>
  )
}

export default Propos