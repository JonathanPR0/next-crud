import { useState } from "react"
import Input from "./Input"
import Client from "@/core/Client"
import Button from "./Button"

interface FormProps {
  client: Client
  changeClient?: (client: Client) => void
  cancel?: ()=>void
}
const Form = (props: FormProps) => {
  const id = props.client.id ?? null
  const [name, setName] = useState(props.client?.name)
  const [age, setAge] = useState(props.client?.age)

  return (
    <div className="flex flex-col gap-3">
      {id ? <Input text="Código" value={id} readOnly /> : false}
      <Input text="Nome" value={name} onChange={setName} />
      <Input text="Idade" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end gap-3">
        <Button color="blue" onClick={()=>props.changeClient?.(new Client(name, +age, id))}>
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button color="gray" onClick={props.cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}

export default Form