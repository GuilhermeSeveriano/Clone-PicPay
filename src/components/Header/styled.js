import styled from 'styled-components'

export const Container = styled.header`
  color: rgba(239, 240, 232, 1);
  background-color: rgba(17, 199, 111, 1);

  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 50;
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: 'Montserrat';
`;

export const Opcoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 0rem 2rem;
    margin: 0rem auto;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 1.5rem;

    img {
        width: 8em;
        height: 3em;
    }
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: auto;

`;

export const Opcao = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.025em;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  color: rgba(247, 247, 247, 1);

  padding: 0.5rem 1rem;

  p {
    font-size: 1em;
    font-weight: bold;
  }

  svg {
    width: 1em;
  }

  &:hover {
      opacity: 0.5;
  }
`;

export const Button = styled.div`
  margin-left: 0.75rem;

  button {
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
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat";
    font-weight: bolder;
    letter-spacing: 0.05rem;
    cursor: pointer;
    min-height: 2.75rem;

    border: none;
  }

  button::before {
    content: "";
    margin-bottom: -0.5em;
    display: table;
  }

  button::after {
    content: "";
    margin-top: -0.5em;
    display: table;
  }

  button:hover {
    background-color: rgba(54, 90, 214, 1);
  }
`;
