import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Cadastrar from './pages/Cadastrar';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Lista from './pages/Lista';
import Formulario from './pages/Formulario';


const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/cadastrar" component={Cadastrar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/lista" component={Lista} />
            <Route exact path="/formulario" component={Formulario} />
            
         </Switch>
      </BrowserRouter>
   )
}

export default Routes;