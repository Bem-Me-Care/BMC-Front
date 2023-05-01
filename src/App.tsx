import { useState } from "react";
import "./App.css";
import ButtonAppBar from "./components/staticos/navbar/Navbar";
import Footer from "./components/staticos/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Team from "./paginas/team/Team";
import Contato from "./paginas/contato/Contato";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import store from "./store/store";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import CadastroCategoria from "./components/categoria/cadastroCategoria/CadastroCategoria";
import CadastroProduto from "./components/produtos/cadastroProduto/CadastroProduto";
import { Provider } from 'react-redux';
import ListaProduto from "./components/produtos/listaProduto/ListaProduto";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TesteFooter from "./components/testeFooter/TesteFooter";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <ButtonAppBar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/team" element={<Team />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/editar-categoria/:id" element={<CadastroCategoria />} />
            <Route path="/editar-produto/:id" element={<CadastroProduto />} />
            <Route path="/deletar-produto/:id" element={<DeletarProduto />} />
            <Route path="/deletar-categoria/:id" element={<DeletarCategoria />} />
            <Route path="/cadastroCategoria" element={<CadastroCategoria />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastroProduto" element={<CadastroProduto />} />
          </Routes>
        </div>

        <TesteFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
