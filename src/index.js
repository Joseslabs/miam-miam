import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Header() {
  return <div className="header">
    <h1>Miam-Miam</h1>
    <form className="form">
      <input type="text" className="search" placeholder="Entrez votre requête ici"/>
      <button type="submit">Rechercher</button>
    </form>
    <nav>
      <a className="home" href="#home">Acceuil</a>
      <a className="service" href="#service">Nos Services</a>
      <a className="commande" href="#commande">Commandes</a>
    </nav>
  </div>;
}
function Section(){
  return <div className="section">
    <p>Bienvenue sur Miam-Miam</p>
  </div>;
}
function Body() {
  return <div className="main">
    <Header />
    <Section />
  </div>;
}
let main= <Body />;
ReactDOM.render(main,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
