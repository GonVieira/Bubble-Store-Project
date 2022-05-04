import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./client/pages/HomePage";
import Vehicles from "./client/pages/Vehicles";
import VehiclePage from "./client/pages/VehiclePage";
import { CartContext } from "../src/context/Context";

render(
  <React.StrictMode>
    <CartContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/vehicle/:key" element={<VehiclePage />} />
            <Route path="/vehicles" element={<Vehicles />}>
              <Route path=":category1" element={<Vehicles />}>
                <Route path=":category2" element={<Vehicles />}>
                  <Route path=":category3" element={<Vehicles />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext>
  </React.StrictMode>,
  document.getElementById("root")
);
