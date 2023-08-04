import "./App.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Auth from "./component/Auth";
import BusinessReg from "./component/BusinessReg";
import EndUserReg from "./component/EndUserReg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      { path: "/business", element: <BusinessReg /> },
      { path: "/enduser", element: <EndUserReg /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
