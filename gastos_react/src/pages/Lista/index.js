import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import firebase from 'firebase/app';
import 'firebase/database';
import '../../firebaseConnection';

import './lista.css';

class Lista extends Component {
   constructor(props) {
      super(props);
      this.state = {
         lista: [],
      };

      firebase.database().ref('gastos').on('value', (snapshot) => {
         let state = this.state;
         state.lista = []

         snapshot.forEach((childItem) => {
            state.lista.push({
               key: childItem.val().key,
               data: childItem.val().data,
               casa: childItem.val().casa,
               agua: childItem.val().agua,
               luz: childItem.val().luz,
               ouro: childItem.val().ouro,
               carro: childItem.val().carro,
               educacao: childItem.val().educacao,
               saude: childItem.val().saude,
               tv_net: childItem.val().tv_net,
                            
            })
         })        
         this.setState(state);
      })

   }
   render() {
      return(
         <div>
            <Header />
            {this.state.lista.map((item) => {
               return(
                  <div className="lista">
                     <table>
                        <tr>
                           <th>Data</th>
                           <th>Casa</th>
                           <th>Água</th>
                           <th>Luz</th>
                           <th>Ouro</th>
                           <th>TV_NET</th>
                           <th>Saúde</th>
                           <th>Educação</th>
                           <th>Carro</th>                           
                        </tr>
                        <tr>
                           <td>{item.data}</td>
                           <td>{item.casa}</td>
                           <td>{item.agua}</td>
                           <td>{item.luz}</td>
                           <td>{item.ouro}</td>
                           <td>{item.tv_net}</td>
                           <td>{item.saude}</td>
                           <td>{item.educacao}</td>
                           <td>{item.carro}</td>
                        </tr>
                     </table>
                     
                  </div>
               )
            })}
         </div>
      )
   }
}

export default Lista;