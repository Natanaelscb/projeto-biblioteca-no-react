import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Sidebar from "./layout/Sidebar";


export function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Tela de Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Página principal */}
        <Route path="/" element={<Sidebar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;