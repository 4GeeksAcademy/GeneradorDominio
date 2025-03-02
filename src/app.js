import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

    // arrays 
    let pronoun = ['la', 'nuestra', 'su'];
    let adj = ['inmensa', 'increible', 'graciosa' ];
    let noun = ['maneradeser', 'paciencia', 'sutileza', 'sapiencia', 'sabiduria'];
    
    // generating the domains
    for(let i = 0; i < pronoun.length; i++) {
      for(let j = 0; j < adj.length; j++) {
        for(let k = 0; k < noun.length; k++) {
          console.log(pronoun[i] + adj[j] + noun[k]+'.com'); 
        }
      }
    }
  
  console.log("dominio");
};
