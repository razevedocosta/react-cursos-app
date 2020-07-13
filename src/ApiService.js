const ApiService = {
    ListaCurso: () =>{
        return fetch('http://localhost:8000/api/curso')
            .then(res => res.json());
    },

    CriaCurso: curso =>{
        return fetch('http://localhost:8000/api/curso', {method: 'POST', headers: {'content-type': 'application/json'}, body: curso})
            .then(res => res.json());
    },
    
    RemoveCurso: id =>{
        return fetch(`http://localhost:8000/api/curso/${id}`, {method: 'DELETE', Headers: {'content-type': 'application/json'}})
        .then(res => res.json());
    }

}
export default ApiService;