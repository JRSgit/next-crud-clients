import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from "../core/Client"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
      tabelaVisivel,  
      exibirForm, 
      exibirTabela
    } = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [status, setStatus] = useState<Boolean>(false)
  

  useEffect( () => {
    setStatus(true)
    setTimeout(() => {
      obterTodos()
      setStatus(false)
    },2000)
    
  }, [])
  
   // eslint-disable-next-line react-hooks/exhaustive-deps
    function obterTodos() {
     repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()

    })
   
}

    function clienteSelecionado(cliente: Cliente){
       setCliente(cliente)
       exibirForm()
       
    }
    async function clienteExcluido(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
      
   }

  async function salvarCliente(cliente: Cliente){
     await repo.salvar(cliente)
      obterTodos()

   }

   function novoCliente(){
    setCliente(Cliente.vazio())
    exibirForm()

}
    return {
        status,
        cliente,
        clientes,
        obterTodos,
        novoCliente,
        exibirTabela,
        tabelaVisivel,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
    }
}
