import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import "./CadastroUsuario.css";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
  const history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (confirmarSenha === user.senha) {
      try {
        await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
        alert("Usuário cadastrado com sucesso");
      } catch (error) {
        console.log(error);
        alert("Por favor, verifique os campos");
      }
    } else {
      alert("As senhas não coincidem");
      setConfirmarSenha("");
      setUser({
        ...user,
        senha: "",
      });
    }
  }

  useEffect(() => {
    console.log("rodou");
  }, [user.nome]);

  useEffect(() => {
    if (userResult.id !== 0) {
      history("/login");
      console.log(userResult);
    }
  }, [userResult]);

  function back() {
    history("/login");
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6} className="imagem2"></Grid>
      <Grid item xs={12} md={6} alignItems="center">
        <Box paddingX={10} marginBottom={5}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              required
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <TextField
              type="email"
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              required
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <TextField
              id="foto"
              label='foto "entrar com a URL"'
              variant="outlined"
              name="foto"
              margin="normal"
              value={user.foto}
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
              required
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <TextField
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              required
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button
                onClick={back}
                variant="contained"
                color="secondary"
                className="btn-cancelar"
              >
                Cancelar
              </Button>

              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
