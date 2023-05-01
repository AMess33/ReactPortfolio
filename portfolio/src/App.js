import React from "react";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import NavItems from "./components/NavItems";

function App() {
  return (
    <div>
      <NavItems />
      <Header />
      <PortfolioContainer />
    </div>
  );
}

export default App;
