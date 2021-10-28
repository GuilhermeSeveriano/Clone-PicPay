import styled from "styled-components";
import React from "react";
import { Container, Descricao } from "./styled";

const Texto = styled.div`
  color: ${(props) => props.cor};
  width: 25em;
  height: 100%;
  position: relative;

  .desc:nth-child(2) {
    padding-bottom: 14em;
    width: 80%;
    font-size: 16pt;
  }

  .desc:nth-child(4) {
    font-size: 10pt;
    padding-top: 0.5em;
  }
`;

const Titulo = styled.div`
    width: 40em;
    margin-bottom: .45em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  p {
      font-weight: bold;
    line-height: 1em;
    font-family: "Oswald";
  }

  p:nth-child(1) {
    line-height: 1.45em;
    font-size: 25pt;
  }

  p:nth-child(2) {
      margin-top: 0.1em;
    font-size: 90pt;
    letter-spacing: -0.01em;
    font-weight: bolder;
  }

  p:nth-child(3) {
      font-size: 50pt;
      letter-spacing: 0.05em;
  }
`;

export const Button = styled.button`
  display: ${(props) => (props.aparecer ? "inline-flex" : "none")};

  background-color: rgba(66, 109, 255, 1);
  color: rgba(239, 240, 232, 1);
  padding: 0rem 1.5rem;
  font-size: 25px;
  line-height: 27.6364px;
  border-radius: 9999px;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-weight: bolder;
  letter-spacing: 0.05rem;
  cursor: pointer;
  min-height: 4rem;
  min-width: 60%;

  border: none;

  &::before {
    content: "";
    margin-bottom: -0.5em;
    display: table;
  }

  &::after {
    content: "";
    margin-top: -0.5em;
    display: table;
  }

  &:hover {
    background-color: rgba(54, 90, 214, 1);
  }
`;

export default function Faixa(props) {
  const {
    imagem: { caminho },
    titulo,
    descricao0,
    descricao1,
    botao: { aparecer, texto },
    corTexto,
    corContainer,
    direcao,
  } = props;

  const Imagem = styled.div`
    background-image: url(${caminho});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;

    height: calc(100vh - 80px);
    width: 50%;

    position: relative;
  `;

  return (
    <Container cor={corContainer} direcao={direcao}>
      <Imagem />
      <Texto cor={corTexto}>
        <Titulo>
          <p>{titulo[0]}</p>
          <p>{titulo[1]}</p>
          <p>{titulo[2]}</p>
        </Titulo>
        <Descricao className="desc">{descricao0}</Descricao>
        <Button aparecer={aparecer}>{texto}</Button>
        <Descricao className="desc">{descricao1}</Descricao>
      </Texto>
    </Container>
  );
}
