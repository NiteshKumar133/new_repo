import React from 'react'
import "./about.css";
export default function About() {
  return (
    <div className='about-parent-container'>
        <h1 style={{textAlign:"center"}}>About me</h1>
        <div className='about-child-container'>
       <ul>
       <li><span className='triangular-bullet'>‣</span>I am a BCA Student at <a href="https://www.cimage.in/" target='__blank' style={{textDecoration:"none"}} className='cimage-gdg'>CIMAGE</a> College, Patna.</li>
       <li><span className='triangular-bullet'>‣</span>I am volunteer at <a href="https://www.gdgpatna.com/"  target='__blank' style={{textDecoration:"none"}} className='cimage-gdg'>GDG</a> Patna.</li>
       </ul>
       </div>  
    </div>
  )
}
