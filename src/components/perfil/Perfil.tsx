import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getById } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import User from "../../models/User";
import { Avatar, Container, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import "./Perfil.css"

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
    await getById(`/usuarios/${id}`, setUsuario, {
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
      <div className="cont">
        <div className="perfilFoto">
          <img src={usuario.foto} alt='' className='perfilFoto' />
          <Typography>{usuario.nome}</Typography>
        </div>
        <div className="perfilDados">
          <Typography variant="h5" className="Typo" fontWeight='800'>Produtos de {usuario.nome}</Typography>
          <Typography fontWeight='600'>Seu total de produtos: {usuario.produto?.length}</Typography>

          {usuario.produto?.map((prod) => (
            <>
              <Typography>{prod.nome}</Typography>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Perfil;
