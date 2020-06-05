import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Header from '../../components/Header';


class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      return (

         <div className="login">
            <Header />
            <h2>Login</h2>

            <form onSubmit={this.logar}>               
               <input type="text" placeholder="email" value={this.state.email}
                  onChange={(e) => this.setState({ emailE: e.target.value })} /> <br />

               <input type="password" placeholder="senha" value={this.state.senha}
                  onChange={(e) => this.setState({ senhaE: e.target.value })} /> <br />
               <button type="submit">Entrar</button>
            </form><br />

         </div>

      );
   }
}

export default Login;