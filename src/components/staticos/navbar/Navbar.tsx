import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import "./Navbar.css";
import { colors } from "@material-ui/core";
import { useEffect, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import User from "../../../models/User";
import { getById } from "../../../services/Service";

const pages = ["Home", "Sobre", "Contato", "Produtos", "Sobre", "Cadastro"];

const pageslinks = [
  "/home",
  "/sobre",
  "/contato",
  "/produtos",
  "/sobre",
  "/cadastro",
];

const settings = [
  { name: "Perfil", href: "/perfil/:id" },
  { name: "Logout", href: "" },
];

function ResponsiveAppBar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [log, setLog] = useState(token);

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado");
    setUsuario;
  }

  console.log(log);
  const [isLogged, setIsLogged] = useState(false);
  const history = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  console.log(usuario);

  async function getUsuarioById(id: string) {
    await getById(`/usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUsuarioById(userId);
  }, [userId]);

  console.log(usuario);
  return (
    <AppBar position="static" style={{ backgroundColor: "#c75f77" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo  */}
          <Box
            sx={{
              marginRight: "auto",
            }}
          >
            <img
              src={"https://avatars.githubusercontent.com/u/129092790?s=96&v=4"}
              alt="Logo da marca BMC"
              style={{ width: "70px", padding: "10px" }}
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ebeae5",
              textDecoration: "none",
            }}
            className="link"
          >
            BEM ME CARE
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyItems: "center",
                marginRight: '3vw'
              }}
            >
              {token !== "" ? (
                <Tooltip title={""}>
                  <>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                      <Avatar
                        alt="Perfil"
                        src={usuario.foto}
                        style={{
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </IconButton>
                  </>
                </Tooltip>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <Link
                    to={"/login"}
                    className="link"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography className="text-color">Login</Typography>
                  </Link>

                  <Divider
                    sx={{ backgroundColor: "white", marginX: "8px" }}
                    orientation="vertical"
                    flexItem
                  />

                  <Link to={"/cadastro"} className="link">
                    <Typography className="text-color">Cadastro</Typography>
                  </Link>
                </Box>
              )}
            </Box>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <List>
                {settings.map((setting) => (
                  <ListItem key={setting.name}>
                    {setting.name === "Logout" ? (
                      <Link onClick={goLogout} to={""}>
                        {setting.name}
                      </Link>
                    ) : (
                      <Link to={setting.href}>{setting.name}</Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
