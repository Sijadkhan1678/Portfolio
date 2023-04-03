import './App.css';
import About from './components/About';
import Navbar from './components/layout/Navbar'
import Projects from './components/Projects';
import {Box} from "@mui/material"
import Skills  from './components/Skills';

function App() {
  return (
    <Box bgcolor="black" color="white">
     <Navbar />
     <About />
     <Skills />
     <Projects />
      
    </Box>
  );
}

export default App;
