import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import PokemonInfo from "./routes/PokemonInfo";
import CardPage from "./routes/CardPage";
import { CardType } from "./extra/CardType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pokemon",
        element: <CardPage type={CardType.POKECARD} />,
      },
      {
        path: "pokemon/:page",
        element: <CardPage type={CardType.POKECARD} />,
      },
      {
        path: "pokemon/id/:id",
        element: <PokemonInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
