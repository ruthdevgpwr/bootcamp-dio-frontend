import { Header } from "../../components/Header"
import { Container, TextContent, Title, TitleHighlight } from "./styles"

import bannerImg from "../../assets/banner.png"
import { Button } from "../../components/Button/Button"
export function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias usadas pelas empresas mais inovadoras do mundo
            e incare o seu novo desafio profissional, evoluindo em comunidade
            comos melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={() => null}
          />
        </div>
        <div>
          <img src={bannerImg} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  )
}
