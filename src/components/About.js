import React from 'react';
import blog from '../images/hero.jpg';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import sijad from '../images/sijad.jpeg'
import fab from '../images/fb-icon-1.png'
import linkedin from '../images/linkedin-icon-1.png'
 
// import sijad from '../images/sijad.jpeg'
// import sijad from '../images/sijad.jpeg'


const About = () => {


  return (
    <Box mt={7.6} borderBottom="2px solid red" pb={2}> 
    <Typography variant='h4' color='white' mt={5} ml={11}> About <span style={{color:"red"}}>Me</span> </Typography>
    <Stack direction={{md:"row",xs:"column"}}  justifyContent="space-evenly" //alignItems="center" 
    
    bgcolor='black' px={0.8} mt={6.7} textAlign="center" id="about" //borderBottom={1}
    >
       
      <Box>
          {/* <img src={sijad} width="250" style={{borderRadius:'50%'}} /> */}

        <Typography variant='h4' color='white' mt={5}>
           Sijad Khan
        </Typography>

      </Box>
      
      <Box sx={{

        pt: { xs: 6, md: 3 },
        ml: { xs: 1.2, md: 2 },
        textAlign: "center",
        // mt: 5

      }}>

        
        <br />
        <Typography variant='h3' color='red'>
        
           Full Stack Developer <span style={{color:"white"}}>(Mern) </span>

        </Typography>

        <Typography component='p' color='white'  mt="1rem" textAlign={{xs:"center"}}  px={{md:8,xs:3}} py={2} width={{md:700,xs:"500"}}
        >
          Highly skilled Mern Stack Developer having 1.5 plus years experience. 
         <br /> I have worked on multiple projects and created 12 projects of Panacloud 2020 Bootcamp  <br />
          
          I am looking for an opportunity to grow my career with a reputed organization
        </Typography>
        
        <Stack direction="row"  justifyContent="center"  mt={3.4} >
         <a href=''> <img src={fab} width="30" style={{backgroundColor:'white',borderRadius:'50%',marginRight:'1.5rem'}}
          /> </a>
         <a href=''>  <img src={linkedin} width="30" style={{backgroundColor:'white',borderRadius:'50%',marginRight:'1.5rem'}}/></a>
          <img />
          <img />
          
          
        </Stack>
        
      </Box>


      {/* <Box sx={{

        // bgcolor: 'red',
      //  width: "40%",

        // mt: 2,

      }}>
         <img src={blog} />

      </Box>
 */}



    </Stack>
    
</Box>
  )

}
export default About;
