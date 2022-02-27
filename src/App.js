import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Overview from './component/Overview';
import Project from './component/Project';
import Contact from './component/Contact';
import Skill from './component/Skill';
import ScrolltoTop from './ScrolltoTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrolltoTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/overview" element={<Overview />} />
        </Routes>
        <Routes>
          <Route path="/project" element={<Project />} />
        </Routes>
        <Routes>
          <Route path="/skill" element={<Skill />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrolltoTop>
    </Router>
  );
}

export default App;
