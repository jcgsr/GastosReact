import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import './sobre.css';

class Sobre extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <div className="sobre">
            <Header />
            <h2>Sobre</h2>
            <p className="texto">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eveniet consequatur eius fuga! Ipsa iure ipsam voluptates, nesciunt, animi quo pariatur asperiores harum quisquam ducimus et odio officia obcaecati adipisci.
            </p>
         </div>
      );
   }
}

export default Sobre;