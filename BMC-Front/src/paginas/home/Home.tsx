import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import ImgHome from "../../assets/img/figuraHome.png";

function Home() {
  return (
    <>
      <div></div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className="caixa"
      >
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          item
          md={6}
        >
          <Grid item>
            <Box paddingX={10}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="titulo-bem-vindo"
              >
                Seja bem vinde ao <br /> Bem Me Care!!
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                align="center"
                className="sub-titulo"
              >
                Cuidando de você!
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box className="botaoHome">
              {/* <Box marginX={'10px'}></Box> */}
              <Grid alignItems="center" alignContent="center">
                <Button fullWidth variant="outlined">
                  Veja os nossos produtos
                </Button>
                <Button fullWidth variant="outlined">
                  Apoie o nosso trabalho
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          item
          md={6}
        >
          <Box paddingY={"10px"} display={"flex"} justifyContent={"center"}>
            <img className="imgHome" src={ImgHome} alt="" width="50%" />
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} className="postagens"></Grid>
    </>
  );
}

export default Home;
