import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import AboutusPage from "../pages/about-us/AboutusPage";
function MainRoutes() {
  return (
    <Routes>
      <Route path={routes.aboutusRoute} element={<AboutusPage />} />
    </Routes>
  );
}

export default MainRoutes;
