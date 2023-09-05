import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Shop, { loader as collectionsLoader } from "./pages/Shop";
import ProductList, { loader as listLoader } from "./features/shop/ProductList";
import ProductView, { loader as productLoader } from "./pages/ProductView";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: collectionsLoader,
      },
      {
        path: "/shop/:list",
        element: <ProductList />,
        loader: listLoader,
      },
      {
        path: "/shop/:list/:product",
        element: <ProductView />,
        loader: productLoader,
      },
      {
        path: "/products/:product",
        element: <ProductView />,
        loader: productLoader,
      },
      {
        path: "/collections/:list",
        element: <ProductList />,
        loader: listLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
