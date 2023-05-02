import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <Grid item className="tituloSobre" alignItems="center">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={4} display='flex' flexDirection='column'>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              className="titulo"
            >
              Sobre o Bem Me Care
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="texto"
            >
              Nossa marca preza pelo fim da pobreza menstrual, por isso nós
              revertemos parte de nossas vendas para distribuição de absorventes
              em escolas públicas periféricas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="/src/assets/BMC-IMAGENS/fotoSobre.png"
            alt=""
            className="fotoSobre"
          />
        </Grid>
        </Grid>
       
        
        <Grid xs={12} className="postagens"></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        className="containerCards"
      >
        <Grid item xs={10}>
          <Box paddingX={5} className="cards">
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="tituloSobre"
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
              className="tituloSobre"
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
              className="tituloSobre"
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
              className="tituloSobre"
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
        </Grid>
        <Grid item xs={10}>
          <Box display='flex' justifyContent='space-around'>
          <img src="/src/assets/icon/logoRoxo.png" alt="" style={{width: '20%'}}/>
          </Box>          
          </Grid>
      </Grid>
    </>
  );
}

export default Sobre;
