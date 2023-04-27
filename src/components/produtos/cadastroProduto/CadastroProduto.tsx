import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAll, getById, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Categoria } from '../../../models/Categoria';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Produto } from '../../../models/Produto';

function CadastroProduto() {
  const history = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
    cor: '',
    fluxo: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: '',
    img: '',
    categoria: null,
  });

  function updateProduto(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
    });
  }

  async function getProdutoById(id: string) {
    getById(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
    if (id !== undefined) {
      getProdutoById(id);
    }
  }, [id]);

  async function getCategoria() {
    await getAll('/categoria', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      alert('Efetue o login');
      history('/login');
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      try {
        await put('/produtos', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto atualizado com sucesso!');
        history('/produtos');
      } catch (error) {
        alert('Falha ao atualizar o produto!');
      }
    } else {
      try {
        await post('/produtos', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto cadastrado com sucesso!');
        history('/produtos');
      } catch (error) {
        alert('Falha ao cadastrar o produto!');
      }
    }
  }

  return (
    <>
        <Box  margin={2}  bgcolor="background.paper" sx={{ maxWidth: 300, margin: 'auto', padding: 2 }}>
        
            <Grid container spacing={2}>
                <Grid className="nomeProduto">
                    <Typography variant="h3" component="h1" align="center" className="textoCP">
                        {produto.id !== 0 ? 'Editar produto' : 'Cadastrar produto'}
                    </Typography>
                </Grid>
                <Grid>
          <form onSubmit={onSubmit}>
            <Box>

            <TextField
              value={produto.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateProduto(event)
              }
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
                value={produto.preco}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                }
                id="preco"
                label="preco"
                name="preco"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                minRows={4}
            />
            // imagem link convert to string
            <TextField
                value={produto.img}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                }
                id="img"
                label="img"
                name="img"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                minRows={4}
            />
            <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
            >

                <InputLabel id="demo-simple-select-helper-label">
                    Categoria
                </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={categoria}
                                label="Categoria"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setCategoria(event.target.value as Categoria)
                                }

                            >
                                {categorias.map((categoria) => (
                                    <MenuItem value={categoria}>{categoria.tipo}</MenuItem>
                                ))}
                            </Select>

                        </FormControl>
                        <FormControl
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel id="demo-simple-select-helper-label">
                                Fluxo
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={categoria}
                                label="Fluxo"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setCategoria(event.target.value as Categoria)
                                }
                            >
                                {categorias.map((categoria) => (
                                    <MenuItem value={categoria}>{categoria.fluxo}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel id="demo-simple-select-helper-label">
                                Cor
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={categoria}
                                label="Cor"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setCategoria(event.target.value as Categoria)
                                }
                            >
                                {categorias.map((categoria) => (
                                    <MenuItem value={categoria}>{categoria.cor}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel id="demo-simple-select-helper-label">
                                Tipo
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={categoria}
                                label="Tipo"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setCategoria(event.target.value as Categoria)
                                }
                            >
                                {categorias.map((categoria) => (
                                    <MenuItem value={categoria}>{categoria.tipo}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Box className="botao">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                {produto.id !== 0 ? "Editar" : "Cadastrar"}
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={() => history("/produtos")}
                            >

                                Cancelar
                            </Button>

                        </Box>
                    </Box>
                </form>
            </Grid>
        </Grid>
    </Box>
    </>
    );
}
export default CadastroProduto;