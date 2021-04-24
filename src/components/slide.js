import React from 'react'

import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';

export default function Slide() {
    return (
      <div style={{marginTop:"6em",
                   padding: "10px"
                   
       }}>
        <h4 style={{textAlign:"center",
                   fontFamily: "Kanit, sans-serif",
                   fontSize: '3em',
                   transition: '1s'
      
      }}>My Work</h4>
        <div class="slide">
        
        <div class="box">
          <img src={pic1} class="pic"></img>
          <span>Opis slike</span>
        </div>

        <div class="box">
          <img src={pic2} class="pic"></img>
          <span>Opis slike</span>
        </div>

        <div class="box">
          <img src={pic3} class="pic"></img>
          <span>Opis slike</span>
        </div>

        <div class="box">
          <img src={pic4} class="pic"></img>
          <span>Opis slike</span>
        </div>
        
        </div> 
      </div>
      
      )
      
    }

