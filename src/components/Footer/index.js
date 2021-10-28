import React from "react";
import { Container, Head, Logo, P, Left, Right, Divider, Main, Foot, Apps, Coluna, Opcao } from "./styled.js";

import RedeSocial from "../RedeSocial";
import StoreButton from "../StoreButton/index.js";

export default function Footer() {
  return (
    <Container>
      <Head>
        <Left>
          <Logo>
            <a href="/">
              <img src="/assets/images/logo.svg" alt="logo" />
            </a>
          </Logo>
          <P direcao="center" lineHeight="">
            <p>Todo mundo usa,</p>
            <p>todo lugar aceita.</p>
          </P>
        </Left>
        <Right>
          <RedeSocial rede="/assets/images/facebook.svg" nome="Facebook" />
          <RedeSocial rede="/assets/images/instagram.svg" nome="Instagram" />
          <RedeSocial rede="/assets/images/twitter.svg" nome="Twitter" />
          <RedeSocial rede="/assets/images/linkedin.svg" nome="LinkedIn" />
          <RedeSocial rede="/assets/images/tiktok.svg" nome="TikTok" />
          <RedeSocial rede="/assets/images/youtube.svg" nome="YouTube" />
        </Right>
      </Head>
      <Divider />
      <Main>
        <Coluna>
          <Opcao>
            <a href="/">Início</a>
          </Opcao>
          <Opcao>Sobre o PicPay</Opcao>
          <Opcao>Nossos Valores</Opcao>
          <Opcao>Blog do PicPay</Opcao>
          <Opcao>Imprensa</Opcao>
          <Opcao>Ética e Compliance</Opcao>
          <Opcao>Baixe o App</Opcao>
          <Opcao>Trabalhe Conosco</Opcao>
        </Coluna>
        <Coluna>
          <Opcao>Para Você</Opcao>
          <Opcao>Parcele Boletos</Opcao>
          <Opcao>PicPay Card</Opcao>
          <Opcao>Faça um Pix</Opcao>
          <Opcao>Pague suas Compras Online</Opcao>
          <Opcao>Pague com PicPay</Opcao>
          <Opcao>Rendimentos</Opcao>
        </Coluna>
        <Coluna>
          <Opcao>Para seu Negócio</Opcao>
          <Opcao>PicPay Empresas</Opcao>
          <Opcao>PicPay Pro</Opcao>
          <Opcao>PicPay E-Commerce</Opcao>
          <Opcao>PicPay Assinatura</Opcao>
          <Opcao>Receba com PicPay</Opcao>
        </Coluna>
        <Coluna>
          <Opcao>Central de Ajuda</Opcao>
          <Opcao>Para Você</Opcao>
          <Opcao>Para seu Negócio</Opcao>
          <Opcao>Regulamentos</Opcao>
          <Opcao>Ouvidoria</Opcao>
        </Coluna>
        <Coluna>
          <Opcao>Informações</Opcao>
          <Opcao>Privacidade</Opcao>
          <Opcao>Segurança</Opcao>
          <Opcao>Demonstrações Financeiras</Opcao>
          <Opcao>Tarifas e Taxas</Opcao>
          <Opcao>Correspondente Bancário</Opcao>
        </Coluna>
        <Coluna>
          <Opcao>Veja Também</Opcao>
          <Opcao>Show do Milhão</Opcao>
          <Opcao>Auxílio Emergêncial</Opcao>
          <Opcao>Tudo Sobre o BR Code</Opcao>
          <Opcao>Portal do Desenvolvedor</Opcao>
        </Coluna>
      </Main>
      <Foot>
        <Left>
          <P direcao="flex-start" lineHeight="1.5rem">
            <p>Copyright © 2021 PicPay. Todos os direitos reservados.</p>
            <p>CNPJ nº 22.896.431/0001-10</p>
            <p>Av. Manuel Bandeira, 291 - SP</p>
          </P>
        </Left>
        <Right>
          <Apps>
            <StoreButton
              caminho="/assets/images/app-store.png"
              nome="Apple Store"
            />
            <StoreButton
              caminho="/assets/images/google-play.png"
              nome="Google App Store"
            />
          </Apps>
        </Right>
      </Foot>
    </Container>
  );
}
