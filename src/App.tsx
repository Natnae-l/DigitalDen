import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import homeLoader from "./loaders/homeLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} loader={homeLoader}></Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
