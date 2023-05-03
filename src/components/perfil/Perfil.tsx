import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getById } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import User from "../../models/User";
import { Avatar, Container, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";

function Perfil() {
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  async function getUserById(id: number) {
    await getById(`/user/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);

  return (
    <>
      <Container>
        <Grid xs={3} alignItems="center" justifyContent="center">
          <Avatar
            src={usuario.foto}
            alt=""
            style={{ width: "15rem", height: "15rem", margin: "0 auto" }}
          />
          <Typography variant="h5" align="center">
            {usuario.nome}
          </Typography>
        </Grid>
        <Grid xs={9} justifyContent="center">
          <Typography variant="h4" align="center">
            {" "}
            Produtos de {usuario.nome}
          </Typography>
          Você tem um total de {usuario.produto?.length} postagens feiras
          {usuario.produto?.map((post) => (
            <p>{post.categoria}</p>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;
