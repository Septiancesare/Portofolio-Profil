import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navigation/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
