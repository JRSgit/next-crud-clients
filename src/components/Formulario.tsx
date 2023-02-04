import { useState } from "react"
import Cliente from "../core/Client"
import Botao from "./Botao"
import Entrada from "./Entrada"


interface FormularioProps {
   cliente: Cliente
   clienteMudou?: (cliente: Cliente) => void
   cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [ nome, setNome] = useState(props.cliente?.nome ?? '')
    const [ idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    

    return(
        <div>
            { id ? (
                <Entrada  texto="Código" 
                valor={id} 
                somenteLeitura className="mb-5" 
                />
            ) : false }
            <Entrada  
                texto="Nome" 
                tipo="text" 
                valor={nome} 
                valorMudou={setNome}
                className="mb-5"
                />
            <Entrada  
                texto="Idade" 
                tipo="number" 
                valor={idade} 
                valorMudou={setIdade}

                />
            <div className="mt-7 flex justify-end">
                <Botao className="mr-2"
                    onClick={() => props.clienteMudou(new Cliente(nome, +idade, id))}
                    
                >
                   {id ? 'Alterar' : " Salvar"}
                </Botao>
                <Botao cor="red" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        
             
        </div>
    )
}