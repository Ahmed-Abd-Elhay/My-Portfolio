import Header from "../src/Components/Header/Header";
import About from "./Components/About/About";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Project/Project";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Skills from "./Components/Skills/Skills";

function App() {


  return (
    <div className="app">

      <ScrollToTop />

      <Header />

      <Hero />

      <About />

      <Skills />

      <Project />

      <ContactMe />

      <Footer />

    </div>
  );
}

export default App;
