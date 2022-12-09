import './App.css';
import Hero from './components/Hero';
import Navbar from './components/layout/Navbar'
import Projects from './components/Projects';
import {Box} from "@mui/material"

function App() {
  return (
    <Box bgcolor="blue">
     <Navbar />
     <Hero />
     <Projects />
      
    </Box>
  );
}

export default App;
