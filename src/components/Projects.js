import React from 'react'
import {Grid,Typography,Box} from '@mui/material'
import ProjectItem from "./ProjectItem"
import spacex from '../images/spacex1.png'
import { projects } from "../Data"


const Projects = () => {

  
console.log("Project",projects)

  return (
    <Box width='95%' m="0 auto"   sx={{flexGrow:1}} mt={12} id="project" mt={14} >
    <Typography variant='h4' fontWeight="180" fontSize={37} component='p' m={3.8}>Portfolio</Typography>
    <Grid container 
          
           
          direction='row' 
          justifyContent='space-evenly'>

       <ProjectItem image={spacex} />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />


    </Grid>
  </Box>
  )
}

export default Projects
