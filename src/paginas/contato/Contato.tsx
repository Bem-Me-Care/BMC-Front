import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Contato.css";
import { Link } from "react-router-dom";

function Contato() {
  return (
    <>
      {/* Início do Grid que estiliza a página */}
      <Grid className="caixaContato">
        {/* Início do Grid container que abriga as informações da página e centraliza o conteúdo da página */}
        <Grid
          container
          justifyContent="center"
          item
          md={7}
        >
          {/* Início de Grid item que abriga o texto principal da página */}
          <Grid item>
            <Typography className="tituloContato">
              Você sabia que algumas pessoas não conseguem comprar
              absorventes?
            </Typography>
            <Typography className="txtContato">
              Infelizmente, essa é a realidade algumas pessoas não têm acesso
              a produtos básicos de higiene.
              <br />
              <br /> Leia um pouco mais sobre esse assunto clicando{" "}
              {/* Inserção de Link informativo, o onClick redireciona a outra janela para não fechar o nosso site*/}
              <a
                onClick={() =>
                  window.open(
                    "https://www.unicef.org/brazil/relatorios/pobreza-menstrual-no-brasil-desigualdade-e-violacoes-de-direitos",
                    "_blank"
                  )
                }
              >
                AQUI
              </a>
            </Typography>
            <Typography className="txtContato2">
              Mas com sua ajuda, há esperança!
            </Typography>
          </Grid>
          {/* Final de Grid item que abriga o texto principal da página */}
          {/* Início de Grid item que abriga as imagens que serão clicáveis para apoio e contato */}
          <Grid item className="imgIcon">
            {/* Imagem que terá um link para doações (implementação futura) */}
            <img
              src='https://i.imgur.com/V7zTxzN.png'
              alt=""
              width="30%"
            />
            {/* Imagem que terá um link para parcerias (implementação futura) */}
            <img
              src='https://i.imgur.com/Px02JcO.png'
              alt=""
              width="35%"
            />
            {/* Imagem com um link para nosso instagram utilizando o onClick para não fechar nosso site */}
            <img
              src='https://i.imgur.com/X6wje8J.png'
              alt=""
              width="35%"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/carebemme/'
                )
              }

            />
          </Grid>
          {/* Final de Grid item que abriga as imagens que serão clicáveis para apoio e contato */}
          {/* Início da Grid que abriga e estiliza os botões */}
          <Grid className="btnContato">
            {/* Link do botão que redireciona a nossa página de produtos */}
            <Link to={"/produtos"}>
              <Button fullWidth variant="outlined" style={{ margin: '10px' }}>
                Veja os nossos produtos
              </Button>
            </Link>
            {/* Botão que terá um Link para redirecionar a pessoa para apoiar nosso projeto */}
            <Button fullWidth variant="outlined">
              Apoie o nosso trabalho
            </Button>

          </Grid>
          {/* Final da Grid que abriga e estiliza os botões */}
        </Grid>
        {/* Final do Grid container que abriga as informações da página e centraliza o conteúdo da página */}
        {/* Início da Grid que abriga a imagem ilustrativa escolhida para a página */}
        <Grid md={5}>
          {/* Box que estiliza onde a imagem fica na tela */}
          <Box display={"flex"} justifyContent={"center"}>
            <img className="ImgContato" src='https://i.imgur.com/TXAnLph.png' alt="" width="75%" />
          </Box>
        </Grid>
        {/* Início da Grid que abriga a imagem ilustrativa escolhida para a página */}
      </Grid>
      {/* Final do Grid que estiliza a página */}
    </>
  );
}

export default Contato;
