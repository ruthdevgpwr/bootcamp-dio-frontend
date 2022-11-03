import React from "react";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

import bannerImg from "../../assets/banner.png";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate("/login");
  };
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
            onClick={handleClickSignin}
          />
        </div>
        <div>
          <img src={bannerImg} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
}
