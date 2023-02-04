import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
      status,
      cliente,
      clientes,
      novoCliente,
      exibirTabela,
      tabelaVisivel,
      salvarCliente,
      clienteExcluido,
      clienteSelecionado,
      
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white 
    `}>
      
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
          <div className='flex justify-end'>
            <Botao  className='mb-4' cor='purple' 
              onClick={novoCliente}>
                Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes}
           clienteSelecionado={clienteSelecionado}
           clienteExcluido={clienteExcluido}
           />
           {status ? <h1 className='text-center'>Carregando...</h1> : '' }
          </>

        ) : (
          <Formulario  
          cliente={cliente} 
          clienteMudou={salvarCliente} 
          cancelado={exibirTabela}/>
        )}
        
      </Layout>

    </div>
  )
}
