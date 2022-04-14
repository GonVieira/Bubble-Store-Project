import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Header from "./client/components/Header";


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
