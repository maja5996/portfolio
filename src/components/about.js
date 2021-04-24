import autoprefixer from 'autoprefixer'
import React from 'react'
import { FaGithub } from "react-icons/fa";

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function About() {
    return (
        <div className="about">

        <div className='wrapper'>
        <div class="typing-demo">
        {/* Little bit about me :) */}
        Let me introduce myself:
        </div>
        </div>
    
       <div class="aboutBox">
       <div class="aboutInfo">
       I am Marija Mihajlov, and I have a passion for Web Development, Digital Products, Pixel Perfect things, and foreign languages. <br/> <br/>Since I was young, I wanted to express my creative side. <br/> Even though I have passed half of my exams at the Faculty of Law, I have discovered that is not a career path that I want to follow. <br/> <br/> So I have decided to leave my studies and engage in Development. 
       </div>
       <SocialIcon url="https://github.com/maja5996" label="My Git" style={{fontSize:"5em",
                         marginTop: "7em",
                         marginLeft: '-7em',
                         display: 'flex',
                        justifyContent:'center',
                        alignContent:'center'}} />;
       {/* <FaGithub style={{fontSize:"5em",
                         marginTop: "7em",
                         marginLeft: '-7em',
                         display: 'flex',
                        justifyContent:'center',
                        alignContent:'center' 
      }}/> */}
      </div>
       
     </div>
    )
}
