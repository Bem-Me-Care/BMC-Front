import React from 'react';
import './TesteFooter.css';
import { Grid } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function TesteFooter() {
    return (
        <div>
            <Grid container justifyContent="space-around" className="bkf" alignItems='center'>
                {/* COMEÇO DA PARTE DE ODS NO FOOTER */}
                <Grid item xs={10} sm={3} className="p1">
                    <Box
                        display="flex"
                        justifyContent="start"
                        alignItems="start"
                        gap={0.5}
                        className="imgPP"
                        marginY={3}
                    >
                        <img
                            src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-9.svg"
                            alt="Logo"
                            onClick={() =>
                                window.open(
                                    'https://www.instagram.com/carebemme/',
                                    '_blank'
                                )
                            }
                            style={{
                                width: '100px',
                                height: '100px',
                                alignSelf: 'center',
                            }}
                        />
                        <img
                            src="https://i.imgur.com/P5ELm5m.png"
                            alt="Logo"
                            onClick={() =>
                                window.open(
                                    'https://www.instagram.com/carebemme/',
                                    '_blank'
                                )
                            }
                            style={{
                                width: '120px',
                                height: '100px',
                                alignSelf: 'center',
                            }}
                        />
                    </Box>
                    <Box className="p0"></Box>
                    <Box justifyContent="start" alignItems="center">
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            className="ods-t"
                        >
                            Sobre a ODS:
                        </Typography>
                    </Box>
                    <Box justifyContent="start">
                        <Typography
                            variant="body2"
                            gutterBottom
                            className="ods-t"
                        >
                            Construir infraestrutura resiliente, promover a
                            industrialização inclusiva e sustentável, e fomentar
                            a inovação
                        </Typography>
                    </Box>
                </Grid>
                {/*  FIM DA PARTE DE ODS NO FOOTER */}
                {/* COMEÇO DAS REDES SOCIAIS NO FOOTER */}
                <Grid item xs={10} sm={3} >
                    <Box marginY={3}>
                    <Box display="flex" justifyContent="center">
                            <Typography
                                variant="body1"
                                gutterBottom
                                className="ods-t"
                            >
                                Entre em Contato:
                            </Typography>
                           
                        </Box>
                         {/* ALINHANDO ICONE COM NOME DO INSTAGRAM */}
                    <Box display='flex' justifyContent='center' className='icon-f'>
                            <Box>
                                <InstagramIcon
                                    onClick={() =>
                                        window.open(
                                            'https://www.instagram.com/carebemme/',
                                            '_blank'
                                        )
                                    }
                                    style={{ cursor: 'pointer' }}
                                />
                            </Box>
                            <Box>
                            <Typography
                                onClick={() =>
                                    window.open(
                                        'https://www.instagram.com/carebemme/',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                Instagram
                            </Typography>  
                            </Box>
                            
                            
                        </Box>
                        {/* ESTA BOX ALINHA O ICONE DO GITHUB */}
                        <Box display='flex' justifyContent='center' className='icon-f m0'>
                            <Box><GitHubIcon
                                onClick={() =>
                                    window.open(
                                        'https://github.com/Bem-Me-Care',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                            /></Box>
                            <Box><Typography
                                onClick={() =>
                                    window.open(
                                        'https://github.com/Bem-Me-Care',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                GitHub
                            </Typography></Box>
                            
                        </Box>
                        
                        <Box display='flex' justifyContent='center' className='icon-f m0'>
                        <Box><EmailIcon
                                onClick={() =>
                                    window.open(
                                        'https://github.com/Bem-Me-Care',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                            /></Box>
                            <Box><Typography
                                
                                onClick={() =>
                                    window.open(
                                        'https://github.com/Bem-Me-Care',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                E-mail
                            </Typography></Box>
                        </Box>

                       
                    </Box>
                </Grid>

                {/* FIM DAS REDES SOCIAIS NO FOOTER */}
                {/* COMEÇO DA LOCALIZAÇÃO NO FOOTER*/}
                <Grid item xs={10} sm={3}>
                    <Box marginY={3} display='flex' justifyContent='center' flexDirection='column' gap={5}>
                        <Box >
                        <Typography
                            variant="body2"
                            gutterBottom
                            className="ods-t"
                        >
                            Localização: Brasil, São Paulo - SP
                        </Typography>
                        </Box>
                        <Box>
                        <Typography
                            variant="body2"
                            gutterBottom
                            className="ods-t"
                        >
                            Todos os direitos e agradecimos reservados à Generation Brasil
                        </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* FIM DA LOCALIZAÇÃO NO FOOTER */}
            </Grid>
        </div>
    );
}

export default TesteFooter;
