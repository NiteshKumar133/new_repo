const options_for_particles = {
    interactivity:{
       events:{
         onClick:{
           enable: true,
           mode: "repulse",
       },
       onHover: {
         enable: true,
         mode: "bounce",
         parallax: {
           enable: false,
           force: 2,
           smooth: 10
         }
       },
       resize: true,
       }, 
     },
     particles:{
       color: {
         value: "#000000",
     },
     collisions: {
       enable: false,
       mode: "bounce",
     },
       shape:{
         type:"circle",
       },
       size:{
         value:{min:1,max:3}
       },
       number:{
         value:120
       },
       move:{
         direction:'none',
         enable:true,
         outModes:{
           default:"bounce"
         },
         speed:.35
       },
       opacity: {
         animation: {
           enable: true,
           minimumValue: 0,
           speed: 1,
           sync: false
         }},
     },  
}
export default options_for_particles;