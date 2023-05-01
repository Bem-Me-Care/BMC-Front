import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { Produto } from '../../../models/Produto';
import { deleteId, getById } from '../../../services/Service';
import { Box, Card } from '@mui/material';
import { Button, CardActions, CardContent, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';

function DeletarProduto() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
      const history = useNavigate();
      const [produto, setProduto] = useState<Produto>()
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
    
      async function getProdutoById(id: string) {
        getById(`/produtos/${id}`, setProduto, {
          headers: {
            Authorization: token
          }
        })
      }
    
      useEffect(() =>{
        if(id !== undefined) {
            getProdutoById(id)}
      }, [id])
    
        function deletarProduto(){
          history('/produtos')
            deleteId(`/produtos/${id}`, {
              headers: {
                Authorization: token
              }
            })
            toast.success('Postagem deletada com sucesso', {
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
        history('/produtos')
      }
    

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto: {produto?.nome}
              </Typography>
              <Typography color="textSecondary" >
              Produto
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={deletarProduto} variant="contained" className="marginLeft" size='large' color="primary">
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

export default DeletarProduto