import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Pizza from "./component/CardPizza/Pizza";
import Footer from "./component/Footer/Footer";
import RegisterPage from "./component/Register/RegisterPage";
import LoginPage from "./component/Register/LoginPage";
import Cart from "./component/Home/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      {/* <RegisterPage />
      <LoginPage />
      <Cart />*/}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
