import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app space">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
