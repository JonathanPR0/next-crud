interface TitleProps {
  children: string
}

const Title = (props: TitleProps) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-4 text-4xl font-bold">{props.children}</h1>
      <hr className="border-2 border-emerald-500" />
    </div>
  )
}

export default Title