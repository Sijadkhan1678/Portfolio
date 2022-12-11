import React from 'react';
import blog from '../images/hero.jpg'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'



const About = () => {
  
    
  return (
    <Stack >

    <Box sx={{
        // bgcolor: 'red',
        // width: "100%",
      
        // mt: 2,
         
      }}>
        <img src="" />

        </Box>
        
         <Box sx={{

        pt : { xs:6,md: 13  },
        ml : { xs:1.2, md:7 },
        mt: 5
                      
                 }}>

          <Typography variant='h3' color='white'>
          I am Full Stack Developer  
            </Typography>
            <br />
            <Typography component='p' color='#120B0E'>
            I have 1.7 years experience in Vanilla Javascript  <br />
             show your show your talent to World
            </Typography>

      </Box>
      

   
    </Stack>
  )

}
export default About
