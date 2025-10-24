import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Games from "./Games";
import LatestGames from "./LatestGames";
import Cart from "./Cart"; 
import AdminPortal from "./AdminPortal";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/games", element: <Games /> },
  { path: "/latest-games", element: <LatestGames /> },
  { path: "/cart", element: <Cart /> }, 
  { path: "/admin", element: <AdminPortal /> }, 
]);

export default router;
