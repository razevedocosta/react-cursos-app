import validador from 'validator';

class FormValidator {

    constructor(validacoes) {

        // validacoes é um array específico do formulário com regras de validação
        this.validacoes = validacoes;
    }

    valida(state) {

        //itera pelo array de regras de validação e constrói
        //um objeto validacao e retorna-o

        //começa assumindo que está tudo válido
        let validacao = this.valido();

        this.validacoes.forEach(regra => {

            //Se o campo não tiver sido marcado anteriormente como invalido por uma regra.
            if (!validacao[regra.campo].isInvalid) {
                //Determina o valor do campo, o método a ser invocado
                //e os argumentos opcionais pela definição da regra
                const campoValor = state[regra.campo.toString()];
                const args = regra.args || [];
                const metodoValidacao = typeof regra.metodo === 'string' ?
                    validador[regra.metodo] : regra.metodo;

                if (metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {
                    validacao[regra.campo] = { 
                        isInvalid: true, 
                        message: regra.mensagem 
                    };
                    validacao.isValid = false;

                }
            }


        });
        return validacao;
    }
    //cria um objeto validaçao para um form válido
    valido() {
        const validacao = {};

        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));

        return { isValid: true, ...validacao };

    }

}
export default FormValidator;