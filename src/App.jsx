import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import NavRouter from "./routes/Nav.Routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/DefaultLayout"

function App() {
  return (
          <BrowserRouter>
          <NavBar/>
            <Layout>
                <NavRouter/>
            </Layout>
            <Footer/>
          </BrowserRouter>
  )
}

export default App
