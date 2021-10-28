import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direcao === "esquerda" ? "row" : "row-reverse"};
  background-color: ${(props) => props.cor};
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.div`
  margin-right: 1em;
`;

export const Texto = styled.div`
  color: ${(props) => props.cor};
  width: 20em;
  padding: 1.5rem;

  .desc:nth-child(2) {
    margin-bottom: 0.5rem;
    font-size: 13pt;
  }

  .desc:nth-child(3) {
    font-style: italic;
    font-size: 10pt;
    margin-bottom: 1.5rem;
  }
`;

export const Titulo = styled.p`
  font-weight: bolder;
  font-size: 25pt;
  line-height: 1.25em;
  font-family: "Oswald";
  width: 90%;
  margin-bottom: 1em;
`;

export const Descricao = styled.p`
  line-height: 1.75rem;
`;

export const Button = styled.button`
  display: ${(props) => (props.aparecer ? "inline-flex" : "none")};

  background-color: rgba(66, 109, 255, 1);
  color: rgba(239, 240, 232, 1);

  padding: 0rem 1.5rem;
  font-size: 16px;
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
  min-height: 2.75rem;

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
