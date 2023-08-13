import "./App.scss";
import { useEffect, useReducer } from "react";
import { router } from "./Router";

import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
