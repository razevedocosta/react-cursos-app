import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './Datatable.js';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cursos: [
                {
                  nome: 'Paulo',
                  categoria: 'React',
                  preco: '1000'
                },
                {
                  nome: 'Daniel',
                  categoria: 'Data Science',
                  preco: '99'
                },
                {
                  nome: 'Marcos',
                  categoria: 'Python',
                  preco: '150'
                },
                {
                  nome: 'Bruno',
                  categoria: 'Testes',
                  preco: '100'
                },
                {
                  nome: 'Nico',
                  categoria: 'Programação Web',
                  preco: '9999'
                }
              ],
              titulo: 'Categorias'
        };
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Categorias</h1>
                    <DataTable dados={this.state.cursos} titulo={this.state.titulo} colunas={['categoria']}/>
                </div>
            </Fragment>
        );
    }
}

export default Autores;