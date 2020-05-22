import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerList from "./CustomersList";
import Footer from "./Footer";
import Button from "./components/Button";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>This is customer Managment app</header>
      <div className="container">
        <Button />
        <CustomerList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
