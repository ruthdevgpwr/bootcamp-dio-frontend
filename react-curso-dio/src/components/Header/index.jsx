import { Button } from "../Button/Button"
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles"

import logo from "../../assets/logo-dio.png"

export function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
          <Button title="Cadastrar" />
        </Row>
        <Row>
          <MenuRight href="">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  )
}
