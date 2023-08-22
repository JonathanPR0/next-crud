import ClientCollection from "@/backend/db/ClientCollection"
import Client from "@/core/Client"
import RepositoryClient from "@/core/RepositoryClient"
import { useEffect, useState } from "react"
import useTableOrForm from "./useTableOrForm"

export default function useClient() {
  const repo: RepositoryClient = new ClientCollection()

  const { formIsVisible, tableIsVisible, showForm, showTable } = useTableOrForm()

  const [clients, setClients] = useState<Client[]>([])
  const [client, setClient] = useState<Client>(Client.void())

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })

  }
  function selectedClient(client: Client) {
    setClient(client)
    showForm()
  }
  async function removedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }
  async function changeClient(client: Client) {
    await repo.save(client)
    getAll()
  }
  function newClient() {
    setClient(Client.void())
    showForm()
  }

  return {
    selectedClient,
    removedClient,
    changeClient,
    newClient,
    client,
    clients,
    tableIsVisible,
    showTable
  }
}