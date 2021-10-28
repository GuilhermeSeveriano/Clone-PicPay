import styled from "styled-components";

export const Container = styled.footer`
  padding: 2.5rem 3.5rem;
  background-color: rgba(17, 199, 111, 1);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.75rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 1.5rem;
  padding-right: 1.5rem;

  border-right: 1px solid rgba(239, 240, 232, 1);

  img {
    width: 10em;
    height: 4em;
  }

  a {
    cursor: default;
  }
`;

export const P = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.direcao};
  justify-content: center;

  p {
    line-height: ${(props) => props.lineHeight};
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat";
  color: rgba(239, 240, 232, 1);
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  margin: 1em 0em;
  border-bottom: 1.3px solid rgba(239, 240, 232, 1);
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  padding: 0.5em 0em 5em 0em;
`;

export const Coluna = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p:nth-child(1) {
    font-weight: bolder;

    &:hover {
      cursor: default;
      opacity: 1;
    }
  }
`;

export const Opcao = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  margin-bottom: 1em;
  color: rgba(239, 240, 232, 1);

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgba(239, 240, 232, 1);

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 2rem;
`;

export const Apps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
