import gitLogo from '../assets/github.png'
import Input from '../components/Input/Input'
import ItemRepo from '../components/ItemRepo/ItemRepo'

import { Container } from './styles'

export function App() {


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do GitHub" />
      <Input />
      <ItemRepo />
    </Container>
  )
}

