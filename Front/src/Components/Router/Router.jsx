import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import Home from "../Home/Home";
import { Sign } from '../Sign/Sign'
import SingleProduct from '../SingleProduct/SingleProduct'
import Notfound from '../NotFound/NotFound';

export const Router = createBrowserRouter([

 {
   path: "",
   element: <Layout />,
   children: [
     { index: true, element: <Home /> },
     { path: "sign", element: <Sign /> },
     { path: "SingleProduct", element: <SingleProduct /> },
    // { path: "AllProducts", element: <AllProducts /> },
    { path: "*", element: <Notfound/> }
      
   ]
 }

])