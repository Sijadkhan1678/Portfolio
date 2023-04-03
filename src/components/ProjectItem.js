import React from 'react'
import blog from '../images/blog-project.png'


import { Paper, Grid, Typography, Box, Button, Stack } from '@mui/material'


export const ProjectItem = ({image}) => {


     console.log("spacex image")
  return (

    <Grid item xs={5.4} md={3.5} mt={3}  >
      <Paper //elevation={6.4} 
      
      >
        {/* <Link to='/blog:${slug}'>     */}
        {/* place Image */}
        <img src={image ? image : blog} height='300px' width="100%" bgcolor="black" />

        <Box pt={2.4} 
        pl={1.5} 
        bgcolor="black"
         >

          <Typography variant='h3'
            fontWeight='500'
            fontSize='1rem'
            color="white"
            pt="1rem"
          >
            Develop and desgin blog website fetch blogs from Contenful CMS and render on UI
            
            <span style={{paddingTop:'1rem',display:'block',color:'red'}} >
            Techs: Gatsby,Contenful,Netlify
            </span>
          </Typography>

          <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1.3}>
             20/11/2022 
        
          </Typography>
        </Box>
        {/* </Link> */}

      </Paper>
    </Grid>

  )
}

const style = {
  borderRadius: '0.8rem',
  height: '250px'
  // width:'400px'
}


export default ProjectItem