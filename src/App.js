import './App.css';
import About from './components/About';
import Navbar from './components/layout/Navbar'
import Projects from './components/Projects';
import {Box} from "@mui/material"

function App() {
  return (
    <Box bgcolor="black" color="white">
     <Navbar />
     <About />
     <Projects />
      
    </Box>
  );
}

export default App;
