import Title from "./Title"

interface LayoutProps {
  title: string
  children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title>Titulo</Title>
      <div className="p-6">
        {props.children}
      </div>
    </div>
  )
}

export default Layout