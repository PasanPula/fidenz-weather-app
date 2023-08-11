import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Layout";
import Home from "../pages/Home/Home";

const Routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={ <Home/> } />
    <Route path="*" element={ <h1>404 Page Not Found</h1> } />
  </Route>)
);

export default Routes;