import React from 'react';
import blog from '../images/hero.jpg'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'



const Hero = () => {
  
    
  return (

    <Box sx={{
        // bgcolor: 'red',
        // width: "100%",
        backgroundImage: `url(${blog})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        // mt: 2,
        height: { sx: "60px", md: "570px" } 
      }}>
        
         <Box sx={{

        pt : { xs:6,md: 13  },
        ml : { xs:1.2, md:7 },
        height : '450px' 
                      
                 }}>

          <Typography variant='h3' color='white' mt={{sm:2,md:9}}>
          I am Full Stack Developer  
            </Typography>
            <br />
            <Typography component='p' color='#120B0E'>
            I have 1.7 years experience in Vanilla Javascript  <br />
             show your show your talent to World
            </Typography>

      </Box>
      

    </Box>
  )

}
export default Hero
