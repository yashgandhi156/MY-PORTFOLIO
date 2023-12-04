import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";
import Techstack from "./pages/Techstack/Techstack";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Techstack />
        <Project />
      </div>
    </div>
  );
}

export default App;
