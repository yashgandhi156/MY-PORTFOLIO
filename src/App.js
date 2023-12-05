import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Project />
        <WorkExp />
      </div>
    </div>
  );
}

export default App;
