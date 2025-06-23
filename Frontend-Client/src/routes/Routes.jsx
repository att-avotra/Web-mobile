import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeClient from '../pages/HomeClient'
import LoginUser from '../pages/LoginUser'
import SignUpUser from '../pages/SignUpUser'
import ProduitClient from '../pages/ProduitClient'
import RoutesLayout from '../Layout/RoutesLayout'
function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayout />,
      children: [{
        path: "/home",
        element: <HomeClient />
      },
      {
        path: "/login",
        element: <LoginUser />
      },
      {
        path: "/sign-up",
        element: <SignUpUser />
      },
      {
        path: "/product",
        element: <ProduitClient />
      },]
    }
  ])
  return <RouterProvider router={router} />
}
export default Routes