import React from "react";
import Routes from "./routes";

import Header from "./components/Header";
import "./styless.css";
import Main from "./pages/main";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
