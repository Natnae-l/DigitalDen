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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        index
        element={<Home />}
        loader={homeLoader}
        errorElement={<Error />}
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
