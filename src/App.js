import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';
import ApiService from './ApiService';

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {

      // listagem de cursos carrega a partir da api
      cursos: [],
      
    };
  }  

  // método para remover um curso da listagem
  removeCurso = id => {

    const { cursos } = this.state;

    this.setState( 
      {
        cursos : cursos.filter((nome) => {
          // remove quando o index da interação for igual ao index da lista
          return nome.id !== id;
        }),
      }
    );

    PopUp.exibeMensagem('error', "Curso removido com sucesso");
    ApiService.RemoveCurso(id);
  }

  // método para receber o curso e seta o estado do componente utilizando spread operator
  escutadorDeSubmit = curso => {

    ApiService.CriaCurso(JSON.stringify(curso))
    .then(res => res.data)
    .then(curso => {
      this.setState({ cursos:[...this.state.cursos, curso]});
      PopUp.exibeMensagem('success', "Curso adicionado com sucesso");
    });
    
  }

  // chamado depois que o componente é construído, faz uma requisição para a API e 
  // altera o estado do componente com os novos dados, chamando novamente o render(), redesenhando a tela.
  componentDidMount(){
    ApiService.ListaCurso()
      .then(res => {
          this.setState({cursos: [...this.state.cursos, ...res.data]})
      });
  }

  render(){

    ApiService.ListaCurso()
      .then(res => console.log(res.data));

    return (
      <Fragment>
        <Header />

        <div className="container mb-10">
          <h3>Cursos</h3>
          <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
          
          <Tabela cursos = { this.state.cursos } removeCurso = {this.removeCurso} />
        </div>
      </Fragment>
    );
  }
}

export default App;
