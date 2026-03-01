import gitLogo from '../assets/github.png'
import { Container } from './styles'

export function App() {


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do GitHub" />
    </Container>
  )
}

