import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const[token, setToken] = useLocalStorage('token');
  const history = useNavigate();

  function goLogout(){
    setToken('');
    alert('Usuário deslogado')
    history('/login')
  }

  return (
    <AppBar position="static" style={{ background: "#c75f77" }}>
      <Toolbar variant="dense">
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Link to="/home">
            <Box className="cursor caixaLogo">
              <Typography variant="h5" color="inherit">
                <img src="https://i.imgur.com/niT17YS.png" alt="" className="img-logo" />
              </Typography>
              <Typography variant="h5" color="inherit">
                Bem Me Care
              </Typography>
            </Box>
          </Link>
          <Box display="flex" justifyContent="start" alignItems={'center'}>
            <Link to="/home">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/produtos">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Produtos
                </Typography>
              </Box>
            </Link>
            <Link to="/sobre">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Sobre nós
                </Typography>
              </Box>
            </Link>
            <Link to="/team">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Equipe
                </Typography>
              </Box>
            </Link>
            {/* <Link to="/cadastro">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Cadastro
                </Typography>
              </Box>
            </Link> */}
            <Link to="/contato">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Contato
                </Typography>
              </Box>
            </Link>

            <Link to="/login">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit" onClick={goLogout}>
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
