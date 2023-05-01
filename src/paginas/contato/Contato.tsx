import React from 'react';
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Contato.css";
import ImgContato from "../../assets/img/pessoaBMC.png";
import ApoieContato from '../../assets/img/apoieContato.png'

function Contato() {
    return (
        <>
            <Grid className="caixaContato">
                <Grid
                    container
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                    item
                    md={7}
                >
                    <Grid item>
                        <Box paddingX={12}>
                            <Typography
                                className="titulo1">
                                Você sabia que algumas pessoas  <br />não conseguem comprar absorventes?
                            </Typography>
                            <Typography
                                className="texto1">
                                Infelizmente, essa é a realidade algumas pessoas não têm acesso a produtos básicos de higiene.
                                <br /><br /> Leia um pouco mais sobre esse assunto  <a href="https://www.unicef.org/brazil/relatorios/pobreza-menstrual-no-brasil-desigualdade-e-violacoes-de-direitos">clicando AQUI</a>
                            </Typography>
                            <Typography className="texto2">
                                Mas com ajuda, há esperança!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item>
                        <img className="ApoieContato" src={ApoieContato} alt="" width="100%" />
                        <Box className="btnContato">
                            <Grid alignItems="center" >
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
                <Grid md={5}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <img className="ImgContato" src={ImgContato} alt="" width="75%" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Contato;