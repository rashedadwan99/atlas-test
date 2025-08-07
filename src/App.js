import { Container } from "react-bootstrap";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Container fluid className="app-container">
      <ToastContainer />
      <MainRoutes />
      <Footer />
    </Container>
  );
}

export default App;
