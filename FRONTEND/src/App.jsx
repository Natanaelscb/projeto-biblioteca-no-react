import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./layout/Layout";
import Inicio from "./pages/inicio/Inicio";
import Emprestimos from "./pages/emprestimos/Emprestimos";
import NovoEmprestimo from "./pages/emprestimos/NovoEmprestimo";
import Livros from "./pages/livros/Livros"


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="emprestimos" element={<Emprestimos />} />
          <Route path="emprestimos/novo" element={<NovoEmprestimo />} />
          <Route path="livros" element={<Livros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;