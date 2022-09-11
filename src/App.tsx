import Home from "./containers/Home";
import Search from "./containers/Search";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
