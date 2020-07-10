import React, { Component } from 'react'

class Formulario extends Component {

    constructor(props){
        super(props);

        this.stateInicial = {
            nome:'',
            categoria:'',
            cargaHoraria:'',
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
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
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
                        <label className="input-field" htmlFor="preco">Carga Horária</label>
                        <input className="validate" id="cargaHoraria" type="text" name="cargaHoraria" value={cargaHoraria} onChange={this.escutadorDeInput} />
                    </div>

                    <button className="waves-effect waves-light indigo lighten-2 btn" type="button" onClick={this.submitFormulario}>Salvar</button>
                </div>
            </form>
        )
    }
}

export default Formulario;