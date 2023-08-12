import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Layout";
import Home from "../pages/Home/Home";
import CityWeather from "../pages/City Weather/CityWeather"

const Routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={ <Home/> } />
    <Route path=":city" element={ <CityWeather/> } />
    <Route path="*" element={ <h1>404 Page Not Found</h1> } />
  </Route>)
);

export default Routes;