import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { NavBar } from "../NavBar/NavBar"
import { Footer } from "../Footer/Footer"

 

export const Layout = () => {
  return (
<>

<Header/>
<NavBar/>
<Outlet/>
{ <main style={{ paddingTop: '150px', minHeight: '100vh' }}></main> }
<Footer/>


</>
  )
}
