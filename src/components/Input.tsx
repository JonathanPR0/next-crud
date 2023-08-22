interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
  onChange?: (value: any) => void
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.text} className="mb-2">{props.text}</label>
      <input type={props.type ?? "text"} name={props.text} value={props.value} readOnly={props.readOnly} className={`
        px-3 py-2
        border border-emerald-500 rounded-lg
        focus:outline-none bg-gray-100
        ${props.readOnly ? "" : "focus:bg-gray-200"}
      `} onChange={e => props.onChange?.(e.target.value)} />
    </div>
  )
}

export default Input
