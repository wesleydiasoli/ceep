import React, { Component } from 'react'
import CardNota from "./CardNotas/CardNota";

class ListaDeNotas extends Component{

    render(){
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos", ).map((index) => {
                    return (
                        <li key = {index}>
                            
                            <CardNota/>
                        </li>
                    );
                })}
            </ul>
        );    
    }
}
export default ListaDeNotas;

/*O que aprendemos nessa aula:

Como podemos criar class components

Entendendo como o JSX renderiza objetos

Hierarquia entre componentes (Pai/filhos)

Componentes podem ter filhos que são componentes

Como integrar o Javascript no meio do seu JSX */