import React,{useEffect} from 'react';
import './header.css';
import TextTransition, { presets } from 'react-text-transition';
export function Showprofile() {
  const TEXTS = ['Web Developer', 'Game Developer'];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000,
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <div className='Showprofile'>

       <div className='show-about-name'>
        <div className='header-line'>
        <h1 className='hello-i-am'>Hello,</h1>
       <h1 className='hello-i-am'>I am Name...</h1>
        </div>
       
       <h2 className='I-am-Full-stack'>I am a <span className='element' style={{color:"blue"}}><TextTransition springConfig={presets.wobbly} inline="true">{TEXTS[index % TEXTS.length]}</TextTransition></span></h2>
       </div>
<img src='https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg' className='profile-pic' alt="profile-pic"/>

    </div>
  )
}
