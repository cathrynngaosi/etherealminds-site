import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FAQs, { loader as faqsLoader } from "./pages/FAQs";
import Shop, { loader as collectionsLoader } from "./pages/Shop";
import ProductList, { loader as listLoader } from "./features/shop/ProductList";
import ProductView, { loader as productLoader } from "./pages/ProductView";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppLayout from "./ui/AppLayout";
import ViewCart from "./pages/ViewCart";
import Favorites from "./pages/Favorites";

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
        path: "/faqs",
        element: <FAQs />,
        loader: faqsLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/cart",
        element: <ViewCart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
