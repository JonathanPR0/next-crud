import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Button from '@/components/Button'
import Form from '@/components/Form'
import useClient from '@/hooks/useClients'

export default function Home() {
  const {
    selectedClient,
    removedClient,
    changeClient,
    newClient,
    client,
    clients,
    tableIsVisible,
    showTable
  } = useClient()


  return (
    <main
      className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-emerald-500 text-white"
    >
      <Layout title='Cadastro Simples'>
        {tableIsVisible ? (
          <>
            <div className='flex justify-end'>
              <Button className='mb-4' color='emerald' onClick={newClient}>Novo CLiente</Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} removedClient={removedClient}></Table>
          </>
        ) : (
          <Form client={client} cancel={showTable} changeClient={changeClient} />
        )}
      </Layout>
    </main>
  )
}
