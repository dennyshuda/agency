import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
