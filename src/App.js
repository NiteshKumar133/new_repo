
import './App.css';
import Contactme from './content/contactme';
import Form from './content/form';
import{Showprofile} from './content/header';
import Project from './content/project';
import Tech from './content/tech';
import Themeswitcher from './content/themeswitcher';
import React,{useState,Suspense}  from 'react';
import Spinner from './content/spinner';
import Test from './content/test';
import About from './content/about';

import { Offline,Online } from 'react-detect-offline';
import Stars from './content/backgroundAnimation';


function App() {
let docTitle = document.title;
window.addEventListener("blur",()=>{
  document.title="Come Back <😊";
})
window.addEventListener("focus",()=>{
  document.title=docTitle;
})
  return (
    <div className="App" >
{/*      
<Online> */}
      <Themeswitcher/>
      
      
      {/* <Stars/> */}
      <Showprofile/>
      <Suspense fallback={<Spinner/>}>
      <Tech/>
      </Suspense>
      <Test/>
      <Suspense fallback={<Spinner/>}>
      <About/>
      </Suspense>
      <Project/>
      <Form/>
      <Contactme/>
      
  {/* </Online>
  <Offline> */}
    {/* <h1 style={{textAlign:"center",marginTop:"300px"}}>📡 You are offline</h1>
    </Offline> */}
    </div>
  );
}

export default App;
