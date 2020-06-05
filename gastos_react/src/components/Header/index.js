import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      return (
         <div className="header">
            <nav>
               <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/cadastrar">Cadastrar</Link></li>
                  <li><Link to="/sobre">Sobre</Link> </li>
                  <li><Link to="/lista">Lista de Dados</Link> </li>
                  <li><Link to="/formulario">Formulário</Link> </li>
               </ul>
            </nav>  
            <h1>Gastos Mensais ReactJS</h1>                    
         </div>
         
      );
   }
}

export default Header;