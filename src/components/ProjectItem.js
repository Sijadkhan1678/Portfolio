import React from 'react'
import blog from '../images/blog-project.png'


import { Paper, Grid, Typography, Box, Button, Stack } from '@mui/material'


export const ProjectItem = ({image}) => {


     console.log("spacex image")
  return (

    <Grid item xs={4.4} md={2.5} mt={2} mb={5} borderRadius="5%" border={0.5} borderColor="gray" //p={1.1}
     >
      {/* <Box>    */}
        {/* place Image */}
        <img src={image ? image : blog} height='200px' style={{borderTopLeftRadius:'5%',borderTopRightRadius:'5%'}}  width="100%"  />


        <Box //pt={2.4} 
        //pl={1.5} 
        // bgcolor="black"
        p={1.5}
         >

          <Typography variant='h3'
            fontWeight='300'
            fontSize='1rem'
            color="white"
           pt="1rem"
          >
            Blog Webiste
            
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

        {/* </Box> */}

    </Grid>

  )
}

const style = {
  borderRadius: '0.8rem',
  height: '250px'
  // width:'400px'
}


export default ProjectItem