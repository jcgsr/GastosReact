import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <div className="footer">
            <p>
               &copy;2020 - Gastos Mensais React JS criado e desenvolvido
               por <br/> <a href="https://jcgsr.github.io/">Jovane Rocha</a>
            </p>
         </div>
       );
   }
}
 
export default Footer;