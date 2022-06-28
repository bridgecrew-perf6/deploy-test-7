import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};
export default App;
