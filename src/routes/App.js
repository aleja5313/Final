import { Compras } from "../components/Compras.js";
import Header from "../components/header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Registro from "../components/Registro.js";
import Account from "../components/Account.js";



function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/compras" element={<Compras />} /> 
          <Route path="/Account" element={<Account/>} />

        
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
