import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import firebase from 'firebase/app';
import 'firebase/database';
import '../../firebaseConnection';

import './formulario.css';

class Formulario extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: '',
         casa: '',
         agua: '',
         luz: '',
         ouro: '',
         tv_net: '',
         saude: '',
         educacao: '',
         carro: ''
      };   
      
      this.cadastrar = this.cadastrar.bind(this);      

   }

   cadastrar(e){
      let dados = firebase.database().ref('gastos');
      let chave = dados.push().key;
      dados.child(chave).set({
         data: this.state.data,
         casa: this.state.casa,
         agua: this.state.agua,
         luz: this.state.luz,
         ouro: this.state.ouro,
         tv_net: this.state.tv_net,
         saude: this.state.saude,
         educacao: this.state.educacao,
         carro: this.state.carro
      })

      e.preventDeafault();
   }

   render() {
      return(
         <div>
            <Header />
            <form onSubmit={this.cadastrar}>
               <input type="text" value={this.state.data}
               onChange={(e) => this.setState({data: e.target.value})}/>

               <input type="number" placeholder="casa" value={this.state.casa}
               onChange={(e) => this.setState({casa: e.target.value})}/>

               <input type="number" placeholder="água" value={this.state.agua}
               onChange={(e) => this.setState({agua: e.target.value})}/>

               <input type="number" placeholder="luz" value={this.state.luz}
               onChange={(e) => this.setState({luz: e.target.value})}/>

               <input type="number" placeholder="ouro" value={this.state.ouro}
               onChange={(e) => this.setState({ouro: e.target.value})}/>

               <input type="number" placeholder="tv_net" value={this.state.tv_net}
               onChange={(e) => this.setState({tv_net: e.target.value})}/>

               <input type="number" placeholder="saúde" value={this.state.saude}
               onChange={(e) => this.setState({saude: e.target.value})}/>

               <input type="number" placeholder="educação" value={this.state.educacao}
               onChange={(e) => this.setState({educacao: e.target.value})}/>

               <input type="number" placeholder="carro" value={this.state.carro}
               onChange={(e) => this.setState({carro: e.target.value})}/>
            
               <button type="submit">Salvar</button>
            </form>
            
         </div>
      )
   }
}

export default Formulario;