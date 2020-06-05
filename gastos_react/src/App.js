// 1º Site em React do zero iniciado em 01.06.2020 - Gastos Mensais.

import React from 'react';
import Footer from './components/Footer';
import Routes from './routes';

import './firebaseConnection';

function App() {
  return (
    <div className="App">      
      <Routes />
      <Footer />
      
      </div>
  );
}

export default App;
