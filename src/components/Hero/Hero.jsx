import React from 'react'
import './Hero.css'
import codjet2 from './../../videos/codjet2.mp4'
const Hero = () => {
  return (
    <div className='hero' id='/'>
    <video className='videoTag' autoPlay loop muted>
    <source src={codjet2} type='video/mp4' />
    </video>
     <div className="hero-text">
     <span>FIM </span>
      <span>N°1 </span>
      <span>SUR LE </span>
      <span>MARQUAGE ET LA FOURNITURE INDUSTRIEL </span>
      <span>EN COTE D'IVOIRE </span>
     </div>
    </div>
  )
}

export default Hero
