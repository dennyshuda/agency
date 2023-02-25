import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
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
      </Layout>
    </div>
  );
}

export default App;
