import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Emprestimos from "./pages/Emprestimos";
import Devoluoces from "./pages/Devolucoes"
import NovoEmprestimo from "./pages/NovoEmprestimo";
import Livros from "./pages/Livros"
import Usuarios from "./pages/Usuarios";
import NovoUsuario from "./pages/NovoUsuario";
import Relatorios from "./pages/Relatorios";
import Reservas from "./pages/reservas";
import EditarUser from "./pages/EditarUser";
import NovoLivro from "./pages/NovoLivro";



export function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="emprestimos" element={<Emprestimos />} />
          <Route path="emprestimos/novo" element={<NovoEmprestimo />} />
          <Route path="devolucoes" element={<Devoluoces />} />
          <Route path="livros" element={<Livros />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="usuario/novousuario" element={<NovoUsuario />} />
          <Route path="usuario/editar/:id" element={<EditarUser />} />
          <Route path="livro/novo" element={<NovoLivro />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="reservas" element={<Reservas />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;