import React from 'react';
import blog from '../images/hero.jpg';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import sijad from '../images/sijad.jpeg'
import fab from '../images/fb-icon-1.png'
import linkedin from '../images/linkedin-icon-1.png'
import twitter from '../images/twitter-icon-1.png'
 
// import sijad from '../images/sijad.jpeg'
// import sijad from '../images/sijad.jpeg'


const Hero = () => {


  return (
    <Box mt={1} borderBottom="2px solid red" pb={2}> 
    
    <Stack direction={{md:"row",xs:"column"}}   justifyContent="flex-start" //alignItems="center"
    flexGrow={1} 
    px={0.8} mt={0} textAlign="center" id="about" //borderBottom={1}
    >
       
           
      <Box sx={{

        pt: { xs: 0, md: 1 },
        ml: { xs: 1.2, md: 2 },
        textAlign: "left",
        // mt: 5

      }}>

<Typography variant='body2' color='white' mt={6} ml={12}> Aslam <span style={{color:"red"}}>Ma-o-Malikm I`im</span> </Typography>
        {/* <br /> */}
        <Typography variant='h3' color='red' ml={8}>
        
           Sijad <span style={{color:"white"}}>Khan </span>

        </Typography>

        <Typography component='p' color='white'  mt="1rem" textAlign={{xs:"left"}}  px={{md:8,xs:3}} py={2} width={{md:700,xs:"500"}}
        >
          Highly skilled Mern Stack Developer having 1.5 plus years experience. 
         
        </Typography>
        
        <Stack direction="row"  justifyContent="flex-start"  mt={3.4} ml={8} >
         <a href=''> <img src={fab} width="30" style={{backgroundColor:'white',borderRadius:'50%',marginRight:'1.5rem'}}
          /> </a>
         <a href=''>  <img src={linkedin} width="30" style={{backgroundColor:'white',borderRadius:'50%',marginRight:'1.5rem'}}/></a>
         <a href=''>  <img src={twitter} width="30" style={{backgroundColor:'white',borderRadius:'50%',marginRight:'1.5rem'}}/></a>

          <img />
          
          
          
        </Stack>
        
      </Box>

      <Box>
          <img src={sijad} width="250" style={{borderRadius:'50%'}} />

       
      </Box>

     



    </Stack>
    
</Box>
  )

}
export default Hero;
