import React from "react";
import { Container } from "./styled";
import styled from "styled-components";

const Imagem = styled.div`
  margin-right: 1em;

  img {
    width: auto;
    height: 30em;
  }
`;

const Texto = styled.div`
  color: ${(props) => props.cor};
  width: 30em;
  padding: 1.5rem;
  letter-spacing: 0.2em;
`;

const Titulo = styled.p`
  font-weight: bolder;
  font-size: 38pt;
  line-height: 1em;
  font-family: "Oswald";
  width: 100%;
`;

export default function FaixaCavalo(props) {
  const {
    imagem: { caminho, nome },
    titulo,
    corTexto,
    corContainer,
    direcao,
  } = props;

  return (
    <Container cor={corContainer} direcao={direcao}>
      <Imagem>
        <img src={caminho} alt={nome} />
      </Imagem>
      <Texto cor={corTexto}>
        <Titulo>{titulo}</Titulo>
      </Texto>
    </Container>
  );
}
