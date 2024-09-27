import Nav from "./nav"
import Footer from "../pages/footer"
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout