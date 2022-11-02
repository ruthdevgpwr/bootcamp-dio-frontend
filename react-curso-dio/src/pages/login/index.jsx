import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"

import { Header } from "../../components/Header"
import { Input } from "../../components/Header/styles"
import { Button } from "../../components/Button/Button"

import {
  Column,
  Container,
  CreateText,
  ForgotText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles"

export function Login() {
  const navigate = useNavigate()

  const handleClickSignin = () => {
    navigate("/feed")
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" />
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
              />
              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickSignin}
                type="button"
              />
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
