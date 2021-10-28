import React from "react";

import { Container, Opcoes, Logo, Nav, Opcao, Button } from "./styled.js";

export default function Header() {
  return (
    <Container>
      <Opcoes>
        <Logo>
          <a href="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
        </Logo>
        <Nav>
          <Opcao>
            <p>
              Para você{" "}
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-n4qf3w-1 blRqZh"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>
          </Opcao>
          <Opcao>
            <p>
              Para seu Negócio{" "}
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-n4qf3w-1 blRqZh"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>
          </Opcao>
          <Opcao>
            <p>
              Central de Ajuda{" "}
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-n4qf3w-1 blRqZh"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>
          </Opcao>
          <Opcao>
            <p>
              Sobre o PicPay{" "}
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-n4qf3w-1 blRqZh"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>
          </Opcao>
          <Opcao>
            <p>Blog</p>
          </Opcao>
          <Opcao>
            <p>Show do Milhão</p>
          </Opcao>
        </Nav>
        <Button>
          <button>
            <p>Baixe o app</p>
          </button>
        </Button>
      </Opcoes>
    </Container>
  );
}
