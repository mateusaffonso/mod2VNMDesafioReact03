import React, { Component } from "react"

import "./App.css"

import manga from "./img_react/manga.jfif"


class App extends Component {

  state = {
    nome: "Mateus Augusto",
    idade: 22,
    comidaFavorita: "estrogonofe",
    musicas: ["Dai a Cesar o que é de Cesar - Cesar mc", "Principia - Emicida, Pastor Henrique Vieira", "Sozinho - Caetano Veloso"  ]

  }


  render() {

    return(
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos de idade</h2>
        <h3>Minha comida favorita é {this.state.comidaFavorita}</h3>
        <h4>Minhas músicas favoritas são:</h4>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={manga}/>
      </div>
    )
  }
}

export default App