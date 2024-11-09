import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const location = useLocation();

  // Verifica se a rota atual é a rota login ("/")
  const isLoginPage = location.pathname === "/"; 

  return (
    <>
      {/* Renderiza a Navbar somente se NÃO estiver na página login */}
      {!isLoginPage && <Navbar />}
      <Outlet />
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;