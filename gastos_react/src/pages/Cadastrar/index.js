import React, { Component } from 'react';

import './cadastrar.css';
import Header from '../../components/Header';

import firebase from 'firebase/app';
import 'firebase/database';
import '../../firebaseConnection';


class Cadastrar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         senha: ''
      };
      this.cadastrar = this.cadastrar.bind(this)
   }

   cadastrar(e) {

      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
         .then(() => {
            alert('Cadastrado com sucesso!')
         })
         .catch((error) => {
            if (error.code === 'auth/invalid-email') {
               alert('E-mail inválido');
            } else {
               alert('Código de erro: ' + error.code)
            }
         })

      e.preventDefault();
   }

   render() {
      return (

         <div className="cadastrar">
            <Header />
            <h2>Cadastrar</h2>
            <form onSubmit={this.cadastrar}>
               <label>Email</label>
               <input type="text" placeholder="email" value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })} /> <br />

               <label>Senha</label>
               <input type="password" placeholder="senha" value={this.state.senha}
                  onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
               <button type="submit">Cadastrar</button>
            </form>

         </div>

      );
   }
}


export default Cadastrar;