import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { routes } from "./utils/routes";
import Detail from "./Pages/Detail";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Page not Found</h1>}
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
