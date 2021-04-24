import React from 'react'
import {Link} from 'react-scroll'

export default function Navbar() {
    return (
        <div className="stickyNav">
      
            { <nav class="navbar" style={{
                overflow: 'hidden'
                
            }}>
                <ul  class="navInfo " style={{
                    listStyle:'circle',
                    fontSize: '1.4em',
                    fontFamily: 'Kanit, sans-serif',

                }}>
                    <li class='navList'><Link activeClass='active' to="home" spy={true} smooth={true}>Home</Link></li>
                    <li class='navList'><Link to="slide" spy={true} smooth={true}>Work</Link></li>
                    <li class='navList'><Link to="about" spy={true} smooth={true}>About</Link></li>
                </ul>
            </nav> 
            
            }

        </div>
    )
}
