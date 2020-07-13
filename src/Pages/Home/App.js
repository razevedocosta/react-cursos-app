import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import Form from '../../Components/Formulario/Formulario';
import PopUp from '../../Utils/PopUp';
import ApiService from '../../Utils/ApiService';

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

    const cursosAtualizado = cursos.filter(curso =>{
      return curso.id !== id
    });

    ApiService.RemoveCurso(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({cursos : [...cursosAtualizado]})
          PopUp.exibeMensagem('error', "Curso removido com sucesso");
        }
      })
      .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar remover o curso"));
  }

  // método para receber o curso e seta o estado do componente utilizando spread operator
  escutadorDeSubmit = curso => {

    ApiService.CriaCurso(JSON.stringify(curso))
    .then(res => {
      if (res.message === 'success') {
        this.setState({ cursos:[...this.state.cursos, curso]});
        PopUp.exibeMensagem('success', "Curso adicionado com sucesso");
      }
    })
    .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o curso"));
    
  }

  // chamado depois que o componente é construído, faz uma requisição para a API e 
  // altera o estado do componente com os novos dados, chamando novamente o render(), redesenhando a tela.
  componentDidMount(){
    ApiService.ListaCurso()
      .then(res => {
        if (res.message === 'success') {
          this.setState({cursos: [...this.state.cursos, ...res.data]})
        }
      })
      .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os cursos"));
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
