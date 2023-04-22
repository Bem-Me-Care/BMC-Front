import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card } from '@material-ui/core';
import imagem from './logoRosa.png';
import { ImportContacts } from '@material-ui/icons';
import './Grid.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridProutos() {
    return (
        // 16 cards
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: '150px', textAlign: 'center', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ backgroundColor: '#c75f77', color: '#fff', padding: '20px', textAlign: 'center', justifyContent: 'center' }}

                >
                    CONHEÇA NOSSOS PRODUTOS
                </Button>

            </Grid>
            <Card style={{ backgroundColor: '#816470', color: '#fff', padding: '20px', textAlign: 'center', justifyContent: 'center' }}>
                <Grid container spacing={2} style={{ textAlign: 'center', justifyContent: 'center', padding: '20px' }}>
                    <Grid item xs={12} sm={3} style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <Item style={{ padding: '20px', }}>
                            <img className='imggrid' src={imagem} alt="produtos=grid" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src='https://i.ibb.co/n1q9hhQ/T-shirt-on-the-wooden-hanger-in-front-of-the-gray-background-4291519-Editado.png" alt="T-shirt-on-the-wooden-hanger-in-front-of-the-gray-background-4291519-Editado'

                                style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src='https://i.ibb.co/Q84cwzN/T-shirt-on-the-wooden-hanger-in-front-of-the-gray-background-higienemenstrual.png" alt="T-shirt-on-the-wooden-hanger-in-front-of-the-gray-background-higienemenstrual" border="0' style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>

                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img className='imggrid' src={imagem} alt="Ribeiro" style={{ width: '100%', backgroundColor: '#fef9b5', }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained"  ></Button>
                                <Button variant="contained" color="secondary"></Button>
                            </div>
                            <Button onClick={() => alert('Adicionado ao carrinho')} variant="contained" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>

                        </Item>
                    </Grid>

                </Grid>
            </Card>
        </Box>
    );
}



