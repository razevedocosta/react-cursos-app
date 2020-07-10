import React, {Component} from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Carga Horária</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    // linha - elemento index - posição
    const linhas = props.cursos.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.categoria}</td>
                <td>{linha.cargaHoraria}</td>
                <td><button className="waves-effect waves-light indigo lighten-2 btn" onClick = { () => { props.removeCurso(index) }}>Remover</button></td>
            </tr>
        )
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {

        // pega os valores do array autores no App.js
        const { cursos, removeCurso } = this.props;

        return (
            <table class="centered highlight">
                <TableHead />
                <TableBody cursos = { cursos } removeCurso = { removeCurso } />
            </table>

        );
    }

}


export default Tabela;