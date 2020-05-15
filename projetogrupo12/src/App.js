import React from 'react';
import logo from './logo.svg';

import './App.css';
import styled from 'styled-components'

class App extends React.Component {
    state = {
    
    pessoas: [
      {
        usuario: "",
        mensagem: "",
        
      },
      
    ],
    
    valorInputUsuario: "",
    valorInputMensagem: "",
    
  };

  adicionaPessoa = () => {
    
    const novaPessoa = {
     
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
      };

     const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputUsuario = event => {
   this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = event => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  
  render() {
   
    const listaDeComponentes = this.state.pessoas.map(pessoa => {
      return (
        <p>
          {pessoa.usuario} - {pessoa.mensagem} 
        </p>
      );
    });

    return (
      <div className={'App-header'}>
        <h1>Lista de Mensagem</h1>
        <div>
          <input
           
            value={this.state.valorInputUsuario}
            
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            
            value={this.state.valorInputMensagem}
            
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />

          
          <button onClick={this.adicionaPessoa}>Enviar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default App;


