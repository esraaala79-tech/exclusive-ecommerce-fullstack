import { createBrowserRouter, Form, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Footer } from './Components/Footer/Footer';
import { Router } from './Components/Router/Router';
import  Home  from './Components/Home/Home';
import { Layout } from './Components/Layout/Layout';
import { Sign } from './Components/Sign/Sign';
import Notfound from './Components/NotFound/NotFound';
import SingleProduct from './Components/SingleProduct/SingleProduct';

let routers= createBrowserRouter([
  {path:'', element:<Layout/>, children:[
  {index:true, element:<Home/>},
  {path:'sign', element:<Sign/>},
  {path:'SingleProduct', element:<SingleProduct/>},
  {path:'*', element:<Notfound/>},

  ]}
])


export default function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}