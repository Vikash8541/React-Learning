import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterProvider from "./components/ContextApi/Counter/CounterProvider.jsx";
import CartProvider from "./components/ContextApi/CartContext/CartProvider.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
