//import Logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "react-bootstrap/Button";

import Header from "./header/header";
import Sidebar from "./side/sidebar";
import Main from "./main/main";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
