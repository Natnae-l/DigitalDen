import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import homeLoader from "./loaders/homeLoader";
import Error from "./components/Error";
import ShopCart from "./components/Shop/Cart/ShopCart";
import FirstPage from "./components/FirstPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Home />}
        loader={homeLoader}
        errorElement={<Error />}
      >
        <Route index element={<FirstPage />} />
        <Route path="cart" element={<ShopCart />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
