interface ButtonProps {
  color?: 'emerald' | 'blue' | 'gray',
  className?: string
  children: any
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const color = props.color ?? "emerald"
  return (
    <button className={`
      bg-${color}-500 text-white font-bold text-md
       px-4 py-2 rounded-md
      ${props.className || ""}
    `} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button