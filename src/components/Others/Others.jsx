import React from 'react'
import './Others.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import piscine from './../../assets/piscine.jpg'
import scotcheuse from './../../assets/scotcheuse.jpg'
const Others = () => {
  return (
    <div>

<h1 class="mb-4 mt-5 fs-8" style={{fontSize:"1.5rem", fontWeight:"bold", color:"#1909B8" }}>AUTRES PRODUITS...</h1>

<div className='slide'>
<Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
    <div style={{
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
background: 'transparent',
backgroundImage : `url(${piscine})`,
backgroundPosition : 'center',
backgroundRepeat : "no-repeat",
margin: "0 auto",
backgroundSize: "contain",
height :'200px',
width : '400px',
fontSize: '30px'
}}></div>
    <div style={{
display: 'flex',
alignItems: 'center',
alignContent: 'center',
backgroundImage : `url(${scotcheuse})`,
backgroundPosition : 'center',
backgroundRepeat : "no-repeat",
margin: "0 auto",
backgroundSize: "contain",
height :'200px',
width : '400px',
fontSize: '30px'
}}/>
    <div style={{
display: 'flex',
alignItems: 'center',
alignContent: 'center',
backgroundImage : `url(${piscine})`,
backgroundPosition : 'center',
backgroundRepeat : "no-repeat",
margin: "0 auto",
backgroundSize: "contain",
height :'200px',
width : '400px',
fontSize: '30px'
}}/>
    <div style={{
display : 'flex',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
backgroundImage : `url(${piscine})`,
backgroundPosition : 'center',
backgroundRepeat : "no-repeat",
margin: "0 auto",
backgroundSize: "contain",
height :'200px',
width : '400px',
fontSize: '30px'
}}/>
 
</Slide>
</div>

    </div>
  )
}

export default Others