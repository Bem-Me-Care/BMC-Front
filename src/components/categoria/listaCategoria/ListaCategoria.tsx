import { Button, CardActions, CardContent } from '@material-ui/core'
import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Categoria } from '../../../models/Categoria'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { getAll } from '../../../services/Service'
import { CategoryOutlined } from '@mui/icons-material'
import { toast } from 'react-toastify'

export default function listaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
    const history = useNavigate();

    async function getAllCategorias() {
        await getAll('/categoria', setCategorias, {
            headers: {
                'Authorization': token
            }
        });
    }

    useEffect(() => {
        getAllCategorias();
    },[categorias.length])

    useEffect(() => {
        if(token === ''){
            toast.info('Efetue o Login', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            history('/login')
        }
    }, [token])


  return (
    <>
      {categorias.map((categoria) => (
        <Box m={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Categoria:
              </Typography>
              <Typography variant="h5" component="div">
                {categoria.tipo}
              </Typography>
              <Typography variant="h5" component="div">
                {categoria.cor}
              </Typography>
              <Typography variant="h5" component="div">
                {categoria.fluxo}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                  <Box mx={1}>
                  <Link to={`/editar-categoria/${categoria.id}`}>
                    <Button
                      variant="contained"
                      size="small"
                    >
                      Editar
                    </Button>
                    </Link>
                  </Box>
                <Link to={`/deletar-categoria/${categoria.id}`}>
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  )
}
