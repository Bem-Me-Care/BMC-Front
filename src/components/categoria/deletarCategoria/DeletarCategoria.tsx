import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';
import { deleteId, getById } from '../../../services/Service';
import { Box, CardContent } from '@mui/material';
import { Button, Card, CardActions, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';

function DeletarCategoria() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
      const history = useNavigate();
      const [categoria, setCategoria] = useState<Categoria>()
      const { id } = useParams<{id: string }>();
    
      useEffect(() => {
        if (token === "") {
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
          history("/login");
        }
      }, [token]);
    
      async function getCategoriaById(id: string) {
        getById(`/categoria/${id}`, setCategoria, {
          headers: {
            Authorization: token
          }
        })
      }
    
      useEffect(() =>{
        if(id !== undefined) {
            getCategoriaById(id)}
      }, [id])
    
        function deletarCategoria(){
            deleteId(`/categoria/${id}`, {
              headers: {
                Authorization: token
              }
            })
            history('/categoria')
            toast.success('Categoria deletada com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
        }
    
      function nao() {
        history('/categoria')
      }
    

  return (
    <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar a Categoria: {categoria?.tipo}  {categoria?.cor}  {categoria?.fluxo}
            </Typography>
            <Typography color="textSecondary" >
            Categoria
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={deletarCategoria} variant="contained" className="marginLeft" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button onClick={nao}  variant="contained" size='large' color="secondary">
              Não
            </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  </>
  )
}

export default DeletarCategoria