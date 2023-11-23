import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainRouter from "./pages/Router";
import Layout from "./components/layouts/DefaultLayout";

function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <MainRouter />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
