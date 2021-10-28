import React from "react";
import Faixa from "../../components/Faixa";
import FaixaCavalo from "../../components/Faixa/cavalo.js";
import FaixaMain from "../../components/Faixa/main.js"
import Footer from "../../components/Footer";

import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <FaixaMain
        imagem={{
          caminho: "/assets/images/iza.webp",
        }}
        titulo={["PARCELE SEUS BOLETOS EM", "ATÉ 12X", "COM PICPAY."]} 
        descricao0="É rápido, fácil e você ainda ganha dinheiro de volta.*"
        descricao1="* Consulte todas as condições no site da campanha"
        botao={{
          aparecer: true,
          texto: "Saiba mais",
        }}
        corTexto="rgb(34, 51, 36)"
        corContainer="rgba(239, 240, 232, 1)"
        direcao="direita"
      />
      <Faixa
        imagem={{
          caminho: "/assets/images/showDoMilhao.webp",
          nome: "Show Do Milhão",
        }}
        titulo="PICPAY TE LEVA PARA O SHOW DO MILHÃO? CERTA RESPOSTA!"
        descricao0="Fez um pagamento acima de R$ 50, tá concorrendo*."
        descricao1="*Consulte o n.º do certificado de autorização SECAP/ME e condições de participação no regulamento completo em: showdomilhao.picpay.com."
        botao={{
          aparecer: true,
          texto: "Saiba mais",
        }}
        corTexto="rgba(239, 240, 232, 1)"
        corContainer="rgb(38, 50, 36)"
        direcao="esquerda"
      />
      <Faixa
        imagem={{
          caminho: "/assets/images/unicorno.webp",
          nome: "Unicorno",
        }}
        titulo="SAIBA TUDO O QUE O PICPAY PODE FAZER POR VOCÊ."
        descricao0="Deixe a carteira em casa. Pague estabelecimentos por Pix, QR Code ou nas maquininhas Cielo, Getnet e Rede."
        descricao1=""
        botao={{
          aparecer: false,
          texto: "",
        }}
        corTexto="rgba(239, 240, 232, 1)"
        corContainer="rgb(119, 210, 132)"
        direcao="direita"
      />
      <Faixa
        imagem={{
          caminho: "/assets/images/celular.webp",
          nome: "Papai Noel",
        }}
        titulo="TRANSFIRA GRANA PARA QUEM QUISER."
        descricao0="Receba e pague amigos sem nenhuma taxa."
        descricao1=""
        botao={{
          aparecer: false,
          texto: "",
        }}
        corTexto="rgb(34, 51, 36)"
        corContainer="rgba(239, 240, 232, 1)"
        direcao="esquerda"
      />
      <Faixa
        imagem={{
          caminho: "/assets/images/monge.webp",
          nome: "Monge",
        }}
        titulo="PAGUE BOLETOS COM PICPAY."
        descricao0="Parcele seus boletos. Com o PicPay, você pode dividir em até 12x no cartão de crédito. É mais rápido, fácil e sem filas."
        descricao1=""
        botao={{
          aparecer: false,
          texto: "",
        }}
        corTexto="rgba(239, 240, 232, 1)"
        corContainer="rgb(38, 50, 36)"
        direcao="direita"
      />
      <Faixa
        imagem={{
          caminho: "/assets/images/viciada.webp",
          nome: "Viciada",
        }}
        titulo="FAÇA RECARGA DE CELULAR, TRANSPORTE E MUITO MAIS."
        descricao0="Dentro do app, você encontra a PicPay Store e lá faz tudo isso e muito mais."
        descricao1=""
        botao={{
          aparecer: false,
          texto: "",
        }}
        corTexto="rgb(34, 51, 36)"
        corContainer="rgba(239, 240, 232, 1)"
        direcao="direita"
      />
      <FaixaCavalo
        imagem={{
          caminho: "/assets/images/vacalo.webp",
          nome: "Vacalo",
        }}
        titulo="COMECE A PAGAR TUDO COM PICPAY AGORA."
        corTexto="rgba(239, 240, 232, 1)"
        corContainer="rgb(34, 51, 36)"
        direcao="esquerda"
      />
      <Footer />
    </div>
  );
}
