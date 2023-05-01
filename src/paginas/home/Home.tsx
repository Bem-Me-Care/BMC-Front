import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import ImgHome from "../../assets/img/figuraHome.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Home() {

  
const history = useNavigate();
const token = useSelector<TokenState, TokenState["tokens"]>(
  (state) => state.tokens
);

useEffect(() => {
  if (token == "") {
    toast.info('Você precisa estar logado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    history("/login");
  }
}, [token]);

  return (
    <>
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
                Seja bem vinde ao <br /> Bem Me Care!
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
                <Link to={"/produtos"}>
                  <Button fullWidth variant="outlined">
                    Veja os nossos produtos
                  </Button>
                </Link>

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
            <img className="imgHome" src={ImgHome} alt="" width="80%" />
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} className="postagens">
        <Typography
          variant="h5"
          component="h5"
          align="center"
          className="sub-titulo"
        >
          EM BREVE NOVAS POSTAGENS!
        </Typography>
      </Grid>
    </>
  );
}

export default Home;
