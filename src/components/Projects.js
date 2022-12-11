import React from 'react'
import {Grid,Typography,Box} from '@mui/material'
import ProjectItem from "./ProjectItem"
import { projects } from "../Data"


const Projects = () => {

  
console.log("Project",projects)

  return (
    <Box width='100%'   sx={{flexGrow:1}} >
    <Typography variant='h3' fontWeight="200" component='p' m={3.8}>Projects</Typography>
    <Grid container 
          spacing={3} 
          direction='row' 
          justifyContent='space-evenly'>

       <ProjectItem />
       <ProjectItem />
       <ProjectItem />


    </Grid>
  </Box>
  )
}

export default Projects
