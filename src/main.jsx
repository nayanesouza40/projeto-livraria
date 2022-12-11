import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";

import Catalogo from "./routes/Catalogo";
import Produto from "./routes/Produto";
import NovoProduto from "./routes/NovoProduto";
import EditarProduto from "./routes/EditarProduto";
import Resultado from "./routes/Resultado"
import Login from "./routes/Login"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/catalogo",
        element: <Catalogo />,
      },
      {
        path: "/produto/:id",
        element: <Produto />,
      },
      {
        path: "/novo",
        element: <NovoProduto />,
      },
      {
        path: "/produto/editar/:id",
        element: <EditarProduto />,
      },
      {
        path: "/busca/:busca",
        element: <Resultado />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);