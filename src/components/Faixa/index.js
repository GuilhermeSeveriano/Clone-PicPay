import React from "react";
import { Button, Container, Descricao, Imagem, Texto, Titulo } from "./styled";

export default function Faixa(props) {
  const {
    imagem: { caminho, nome },
    titulo,
    descricao0,
    descricao1,
    botao: { aparecer, texto },
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
        <Descricao className="desc">{descricao0}</Descricao>
        <Descricao className="desc">{descricao1}</Descricao>
        <Button aparecer={aparecer}>{texto}</Button>
      </Texto>
    </Container>
  );
}
