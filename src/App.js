import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
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
        <Contact />
      </div>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center">Made With 😍 Yash Gandhi &copy; 2023</h4>
      </div>
    </div>
  );
}

export default App;
