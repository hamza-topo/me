import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About';
import { Footer } from './Components/Layout/Footer';
import { Nav } from './Components/Layout/Nav';
import { Blog } from './Components/Blog';
import { Contact } from './Components/Contact';
import { Cv } from './Components/Layout/Cv';
function App() {

  return (
    <div className="App">
      {/* <Footer /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>

    </div>
  );
}

export default App;
