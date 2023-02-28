import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Price from "./components/Price";
import Project from "./components/Project";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <Hero />
        <Services />
        <Project />
        <Price />
        <Team />
        <Testimonial />
        <Blog />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
