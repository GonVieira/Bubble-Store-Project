import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./client/components/HomePage";
import Vehicles from "./client/components/Vehicles";
import Cars from "./client/components/Cars";
import Motorcycles from "./client/components/Motorcycles";
import VehiclePage from "./client/components/VehiclePage";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="cars" element={<Cars />} />
          <Route path="motorcycles" element={<Motorcycles />} />
          <Route path="/vehicles">
            <Route path=":key" element={<VehiclePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
