import React, { Component } from 'react';
import FormValidator from '../../Utils/FormValidator';
import PopUp from '../../Utils/PopUp';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Informe o nome do curso'
            },
            { 
                campo: 'categoria',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Informe a categoria'
            },
            { 
                campo: 'cargaHoraria',
                metodo: 'isInt',
                args: [{min: 0, max: 9999}],
                validoQuando: true,
                mensagem: 'Informe a carga horária'
            }
          ]);

          this.stateInicial = {
            nome: '',
            categoria: '',
            cargaHoraria: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
    }

    // método para habilitar a digitação dos inputs
    escutadorDeInput = event => {
        const { name, value } = event.target;
    
        this.setState({
            [name] : value
        });
    }

    // método que irá, a partir do props, chamar o escutadorDeSubmit(), 
    // passando como parâmetro this.state, enviando as informações do novo curso para o App.js
    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
    
        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, categoria, cargaHoraria } = validacao;
            const campos = [nome, categoria, cargaHoraria];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid
            });

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    render() {

        const { nome, categoria, cargaHoraria } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input className="validate" id="nome" type="text" name="nome" value={nome} onChange={this.escutadorDeInput} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="categoria">Categoria</label>
                        <input className="validate" id="categoria" type="text" name="categoria" value={categoria} onChange={this.escutadorDeInput} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="cargaHoraria">Carga Horária</label>
                        <input className="validate" id="cargaHoraria" type="text" name="cargaHoraria" value={cargaHoraria} onChange={this.escutadorDeInput} />
                    </div>

                    <button className="waves-effect waves-light indigo lighten-2 btn" type="button" onClick={this.submitFormulario}>Salvar</button>
                </div>
            </form>
        )
    }
}

export default Formulario;