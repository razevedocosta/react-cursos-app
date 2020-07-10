import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component{

  state = {

    cursos: [
      {
        nome: 'Introdução a React',
        categoria: 'React',
        cargaHoraria: '6'
      },
      {
        nome: 'Visualização da Dados com Python',
        categoria: 'Data Science',
        cargaHoraria: '10'
      },
      {
        nome: 'Criando uma página html',
        categoria: 'Programação Web',
        cargaHoraria: '10'
      },
      {
        nome: 'Utilizando Selenium com Eclipse',
        categoria: 'Testes',
        cargaHoraria: '20'
      }
    ],
  };

  // método para remover um curso da listagem
  removeCurso = index => {

    const { cursos } = this.state;

    this.setState( 
      {
        cursos : cursos.filter((nome, posAtual) => {
          // remove quando o index da interação for igual ao index da lista
          return posAtual !== index;
        }),
      }
    );
  }

  // método para receber o curso e seta o estado do componente utilizando spread operator
  escutadorDeSubmit = curso => {
    this.setState({ cursos:[...this.state.cursos, curso]})
  }

  render(){
    return (
      <Fragment>
        <Header />

        <div className="container mb-10">
          <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
          
          <Tabela cursos = { this.state.cursos } removeCurso = {this.removeCurso} />
        </div>
      </Fragment>
    );
  }
}

export default App;
