import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cadastrar.css';
import Header from '../../components/Header';


class Cadastrar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         senha: ''
      };
   }

   render() {
      return (

         <div className="cadastrar">
            <Header />
            <h2>Cadastrar</h2>
            <form onSubmit={this.cadastrar}>
               <input type="text" placeholder="email" value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })} /> <br />

               <input type="password" placeholder="senha" value={this.state.senha}
                  onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
               <button type="submit">Cadastrar</button>
            </form>

         </div>

      );
   }
}


export default Cadastrar;