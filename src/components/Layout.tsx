import Title from "./Title"

interface LayoutProps {
  title: string
  children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={`
      flex flex-col w-full sm:w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title>Cadastrar Usuários</Title>
      <div className="p-5">
        {props.children}
      </div>
    </div>
  )
}

export default Layout