import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <Hero />
        <Services />
      </Layout>
    </div>
  );
}

export default App;
