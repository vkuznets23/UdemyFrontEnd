type headerProps = {
  header: string
}

const Header = ({ header }: headerProps) => {
  return <h1>{header}</h1>
}

export default Header
