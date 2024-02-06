import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMin from "./paginas/SobreMim";
import Menu  from "./componentes/Menu";
import Rodape from "componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMin />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
  
}

export default AppRoutes;