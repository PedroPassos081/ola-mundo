import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMin from "./paginas/SobreMim";
import Menu  from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMin />} />
        </Route>

        <Route path="/posts/:id" element={<Post />} />
        <Route  path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
  
}

export default AppRoutes;
