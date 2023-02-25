import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Price from "./components/Price";
import Project from "./components/Project";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <Hero />
        <Services />
        <Project />
        <Price />
      </Layout>
    </div>
  );
}

export default App;
