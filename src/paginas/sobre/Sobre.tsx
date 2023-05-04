import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      {/* Início de Grid container que abriga o resumo do projeto e a imagem ilustrativa */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        {/* Início do Grid com a o texto e a imagem ilustrativa do Sobre */}
        <Grid item className="tituloCards" alignItems="center">
          {/* Início da Grid que alinha os items e define tamanho das colunas do texto */}
          <Grid alignItems="center" item xs={6}>
            {/* Início da Box que abriga o resumo do Projeto */}
            <Box paddingX={4} display='flex' flexDirection='column'>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                className="tituloSobre"
              >
                Sobre o Bem Me Care
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="h5"
                className="textoSobre"
              >
                Nossa marca preza pelo fim da pobreza menstrual, por isso nós
                revertemos parte de nossas vendas para distribuição de absorventes
                em escolas públicas periféricas.
              </Typography>
            </Box>
            {/* Final da Box que abriga o resumo do Projeto */}
          </Grid>
          {/* Final da Grid que alinha os items e define tamanho das colunas do texto */}
          {/* Grid que contém a foto ilustrativa */}
          <Grid item xs={6}>
            <img
              src="https://i.imgur.com/0M0QFmi.png"
              alt=""
              className="fotoSobre"
            />
          </Grid>
        </Grid>
        {/* Final do Grid com a o texto e a imagem ilustrativa do Sobre */}
      </Grid>
      {/* Final de Grid container que abriga o resumo do projeto e a imagem ilustrativa */}
      {/* Início da Grid que abriga os Cards */}
      <Grid
        container
        direction="row"
        className="containerCards"
      >
        {/* Início da Grid que define quantas colunas os Cards ocupam */}
        <Grid item xs={10}>
          {/* Início das Boxes que estiliza os Cards */}
          <Box paddingX={5} className="cards">
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="tituloCards"
            >
              Quem somos?
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              className="textoCard"
            >
              Somos o Bem Me Care, uma marca que distribui absorventes
              reutilizáveis e coletores menstruais com valor acessível. Nosso
              compromisso está dentro da ODS - Objetivos de Desenvolvimento
              Sustentável de número 9: "Indústria, Inovação e Infraestrutura",
              promovendo acessibilidade à higiene de forma sustentável. Contamos
              com tecnologia que propõe conforto no uso, absorção rápida,
              impermeabilidade e antibacteriana.
            </Typography>
          </Box>
          <Box paddingX={5} className="cards">
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="tituloCards"
            >
              Nossos Valores
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              className="textoCard"
            >
              Preços acessíveis, inclusão de gênero, acesso equitativo,
              apoio ao auto cuidado e atendimento as necessidades básicas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box paddingX={5} className="cards">
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="tituloCards"
            >
              Nossa Missão
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              className="textoCard"
            >
              É diminuir a pobreza menstrual em escolas públicas periféricas
              através da distribuição de absorventes para pessoas que não têm
              acesso e que consequentemente necessitam se ausentar das aulas
              durante esse período.
            </Typography>
          </Box>
          <Box paddingX={5} className="cards">
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="tituloCards"
            >
              Nossa Visão
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              className="textoCard"
            >
              Nossa ideia é incluir todas as pessoas que menstruam em um
              movimento sustentável e inovador, onde todes possam se sentir
              acolhidos, independentemente de gênero e condições sociais, além
              de contribuirmos na diminuição de produção de lixo.
            </Typography>
          </Box>
          {/*Final das Boxes que estiliza os Cards */}
        </Grid>
        {/* Final da Grid que define quantas colunas os Cards ocupam */}
        {/* Início da Grid que contém a logomarca do projeto */}
        <Grid item xs={10}>
          <Box display='flex' justifyContent='space-around'>
            <img src="https://i.imgur.com/Hktg1Kv.png" alt="" style={{ width: '20%' }} />
          </Box>
        </Grid>
        {/* Final da Grid que contém a logomarca do projeto */}
      </Grid>
      {/* Final da Grid que abriga os Cards */}
    </>
  );
}

export default Sobre;