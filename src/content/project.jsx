import React from 'react';
import './project.css';
import data from './data';
import { Tilt } from 'react-tilt';
import { addborder } from './tech';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Project() {
  return (
    <div className='form-container2'>
   <span className='Technology-i' style={{marginTop:'30px'}}>Projects</span>
{data.map((data1,index)=>{
    return (
      <div className='project-container' style={{flexDirection:index%2!==0&&'row-reverse'}}>
        <div>
        <h1>{data1.title}</h1>
        <h2 className='data1-description'>{data1.description}</h2>
        {data1.tech.map((techImage, techIndex) => (
              <img
                key={techIndex}
                src={techImage}
                alt={`Tech ${techIndex} of Set ${index + 1}`}
                className="icon-tech"
                loading="lazy" onClick={()=>addborder(".icon-tech")}
              />
            ))}
        <div>
         </div>
        {data1.see_live&& <a href={data1.live} target='_blank'><button className='live-button'>live</button></a>}
        <a href={data1.code} target='_blank' ><button  className='live-button'>Code</button></a>
        </div>
        <Tilt   options={{ max: 5.8, scale: 1 ,transition:true}}> <LazyLoadImage src={data1.thumbnail} className='project-image' alt={`image${index}`}/></Tilt>
    </div>
    )
  })
}
    </div>
  )
}
