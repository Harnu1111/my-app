import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Preloader } from "./components/Preloader";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Preloader/>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
