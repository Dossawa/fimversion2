import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


import codjet1 from './../../assets/codjet1.jfif'
import codjet2 from './../../assets/codjet2.jfif'
import codjet3 from './../../assets/codjet3.jfif'
import codjet4 from './../../assets/codjet4.jfif'
import codjet5 from './../../assets/codjet5.jfif'
import codjet6 from './../../assets/codjet6.jfif'
import cater from './../../assets/cater.webp'
import adoucisseur from './../../assets/adoucisseur.jpg'
import scotcheuse from './../../assets/scotcheuse.jpg'
import cartouche from './../../assets/cartouche.jpg'
import potabilisation from './../../assets/potabilisation.png'
import piscine from './../../assets/piscine.jpg'
import filtrepure from './../../assets/filtrepure.jpg'
import './Solution.css'

const Solution = () => {
  return (
    <div id='produits'>
        <button>Découvrir nos Solutions</button>

        <div className="sol">
          <div>
            SOLUTIONS DE MARQUAGE 
          </div>
          <div className='sol-img'>
          <div>
          <img src={codjet1} alt="" />
          <span>Machine Codjet</span>
          </div>
          <div>
          <img src={codjet2} alt="" />
          <span>Programmation pour le marquage</span>
          </div>
          <div>
          <img src={codjet3} alt="" />
          <span>Marquage des produits</span>
          </div>
          </div>
        </div>

        <div className="sol">
          <div className='sol-img'>
          <div>
          <img src={codjet4} alt="" />
          <span>Marquage date de péremption</span>
          </div>
          <div>
          <img src={codjet5} alt="" />
          <span>Numero de série & date de péremption</span>
          </div>
          <div>
          <img src={codjet6} alt="" />
          <span>Marquage de pots de peinture</span>
          </div>
          </div>
        </div>

        <div className="traitement-eau sol">
          <div>
          SOLUTIONS DE TRAITEMENT D'EAU
          </div>
          <div className='sol-img'>
          <div>
          <img src={cater} alt="" />
          <span>Carter Big Blue 20 pouces Diam 40</span>
          </div>
          <div>
          <img src={adoucisseur} alt="" />
          <span>Adoucisseur d'eau 20L Fleck</span>
          </div>
          <div>
          <img src={filtrepure} alt="" />
          <span>Purificateurs eau</span>
          </div>
          </div>
        </div>

        <div className="traitement-eau sol">
         
          <div className='sol-img'>
          <div>
          <img src={cartouche} alt="" />
          <span>Cartouche filtrante</span>
          </div>
          <div>
          <img src={piscine} alt="" />
          <span>Chlore </span>
          </div>
          <div>
          <img src={potabilisation} alt="" />
          <span>Station de potabilisation</span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Solution