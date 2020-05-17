import React from 'react';

import './App.css';
import styled from 'styled-components';
import {Mensagem} from './Components/Mensagem';

const AppContent = styled.div`
  background-color: white;
  width: 50vw;
  height: 100%;
  margin: auto;
  border-style: solid;
  border-radius: 1mm;
  border-color: black;
`

const AppHeader = styled.div`
  background-color: #009688;
  height: 10vh;
`

const Title = styled.h1`
  color: white;
  margin-left:10px;
`

const MessageFeed = styled.div`
  background-color: white;
  margin-left:10px;
  padding-top: 25px;
  padding-bottom: 50px;
`

const MessageStyle = styled.p`
  padding-bottom: 5px;
`

const AppFooter = styled.div`
  background-color: #f0f0f0;
  height: 5vh;
`
const InputField = styled.div`
  margin-left:10px;
  height: 100%;
  display: flex;
  align-items: center;

  & :first-child {
      width:20%
  }

  & :nth-child(2) {
      width:60%
  }

  & :nth-child(3) {
      margin: auto;
  }
`

class App extends React.Component {
    state = {
    
      mensagems: [
      {
        usuario: "Labezap",
        texto: "Olá, essa é a primeira mensagem",        
      },
      
    ],
    
    valorInputUsuario: "",
    valorInputTexto: "",
  };

  adicionarMensagem = () => {
    const novaMensagem = {
     
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto,
      };

      if(novaMensagem.texto != "" && novaMensagem.usuario != "")
      {
          const novasMensagems = [...this.state.mensagems, novaMensagem];
          this.setState({ valorInputTexto: "" });
        
          this.setState({ mensagems: novasMensagems });
      }
  };

  onChangeInputUsuario = event => {
   this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputTexto = event => {
    this.setState({ valorInputTexto: event.target.value });
  };

  
  render() {
   
    const listaDeComponentes = this.state.mensagems.map(pessoa => {
      return (
        <MessageStyle>
          <Mensagem key={Date.now()} usuario={pessoa.usuario} texto={pessoa.texto}/>
        </MessageStyle>
      );
    });

    return (
      <AppContent>
        <AppHeader>
          <Title>Lista de Mensagem</Title>
        </AppHeader>

        <MessageFeed>{listaDeComponentes}</MessageFeed>
        <AppFooter>
          <InputField>
            <input           
              value={this.state.valorInputUsuario}            
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <input
              type="text"
              value={this.state.valorInputTexto}           
              onChange={this.onChangeInputTexto}
              placeholder={"Mensagem"}
            />
            <button onClick={this.adicionarMensagem}>Enviar</button>
          </InputField>
        </AppFooter>
      </AppContent>
    );
  }
}

export default App;


