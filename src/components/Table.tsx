import Client from "@/core/Client"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void
  removedClient?: (client: Client) => void
}

const Table = (props: TableProps) => {
  const hasActions = props.selectedClient || props.removedClient

  function renderHeader() {
    return (<tr className="font-bold text-md sm:text-lg">
      <th className="text-left p-3">Código</th>
      <th className="text-left p-3">Nome</th>
      <th className="text-left p-3">Idade</th>
      {hasActions ? <th className="text-center p-3">Ações</th> : false}
    </tr>)
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (<tr key={client.id} className={`${i % 2 === 0 ? "bg-green-200" : "bg-green-100"} text-sm sm:text-base font-medium`}>
        <td className="text-left p-3">{client.id}</td>
        <td className="text-left p-3">{client.name}</td>
        <td className="text-left p-3">{client.age}</td>
        {renderActions(client)}
      </tr>)
    })
  }

  function renderActions(client: Client) {
    return (
      hasActions ? (
        <td className="flex items-center justify-center gap-1 h-full p-2">
          {props.selectedClient ? (
            <button className={`
          flex justify-center items-center
          text-green-600 hover:bg-emerald-100 
          rounded-full p-2
        `} onClick={() => props.selectedClient(client)}>{EditIcon}</button>
          ) : false}
          {props.removedClient ? (
            <button className={`
          flex justify-center items-center
          text-red-400 hover:bg-emerald-100 
          rounded-full p-2
        `} onClick={() => props.removedClient(client)}>{TrashIcon}</button>
          ) : false}
        </td>
      ) : false
    )
  }

  return (
    <div className="max-w-full overflow-x-scroll">
      <table className="w-full rounded-lg overflow-hidden">
        <thead className={`
        text-gray-100
        bg-emerald-600
      `}>{renderHeader()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  )
}

export default Table