import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import HomeClient from '../pages/Client/HomeClient'
import LoginUser from '../pages/Client/LoginUser'
import SignUpUser from '../pages/Client/SignUpUser'
import ProduitClient from '../pages/Client/ProduitClient'
import RoutesLayout from '../Layout/RoutesLayout'
import CommandeClient from '../pages/Client/CommandeClient'
import DashboardAdmin from '../pages/Admin/DashboardAdmin'
import Product from '../pages/Admin/Product'
import CategorieProduit from '../pages/Admin/CategorieProduit'
import AdminLayout from '../Layout/AdminLayout' // <-- Ajoute ceci
import Parametres from '../pages/Admin/Parametres'

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayout />,
      children: [
        { path: "/home", element: <HomeClient /> },
        { path: "", loader: () => redirect("/home") },
        { path: "/login", element: <LoginUser /> },
        { path: "/product/cart", element: <CommandeClient /> },
        { path: "/sign-up", element: <SignUpUser /> },
        { path: "/product", element: <ProduitClient /> },
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "admin", loader: () => redirect("/admin/dashboard") },
        { path: "dashboard", element: <DashboardAdmin /> },
        { path: "product", element: <Product /> },
        { path: "product-categories", element: <CategorieProduit /> },
        { path: "order", element: <DashboardAdmin /> },
        { path: "parametre", element: <Parametres /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default Routes