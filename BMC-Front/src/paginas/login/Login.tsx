import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login() {
  const [token, setToken] = useLocalStorage("token");
  const useHistory = useNavigate();

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login("/usuarios/logar", userLogin, setToken);
      alert("Usuario logado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Usúario ou senha invalidos");
    }
  }

  useEffect(() => {
    if (token !== "") {
      useHistory("/home");
    }
  }, [token]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item alignItems="center" xs={12} md={6}>
        <Box paddingX={6}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              className="textos1"
            >
              <Link to="/cadastro">Cadastre-se</Link>{" "}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
