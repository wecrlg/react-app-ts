import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ShoppingContextProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </ShoppingContextProvider>
  );
}

export default App;
