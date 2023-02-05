import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import reactlogo from '../images/react.png'


const  Skills = () => {
  return (
    <Box bgcolor="black[500]" p='1rem' mt={10}>
        
        <Typography variant='h4' textAlign="left" ml={5.5} fontSize={40} >
            Skills
        </Typography>
    <Stack flexDirection="row" justifyContent="space-around" flexWrap='wrap' mt={5.7}>
      <Box>
      <img src={reactlogo} width="70px" /> 
          <Typography variant='h5' mb={1} textAlign='center'>
              React js
          </Typography>
        
      </Box>
      <Box>
          <Typography variant='h5' mb={1} textAlign='center'>
              React js
          </Typography>
         <img src={reactlogo} width="70px" /> 
      </Box>
      
      <Box>
          <Typography variant='h5' mb={1} textAlign='center'>
              React js
          </Typography>
         <img src={reactlogo} width="70px" /> 
      </Box>
      
      <Box>
          <Typography variant='h5' mb={1} mt={1} textAlign='center'>
              React js
          </Typography>
         <img src={reactlogo} width="70px" /> 
      </Box>
      
      <Box>
          <Typography variant='h5' mb={1} textAlign='center'>
              React js
          </Typography>
         <img src={reactlogo} width="70px" /> 
      </Box>
      
      <Box>
          <Typography variant='h5' mb={1} textAlign='center'>
              React js
          </Typography>
         <img src={reactlogo} width="70px" /> 
      </Box>
      
      <Box>
          <Typography variant='h5' mb={1} textAlign='center'>
              React js
          </Typography>
         <img src={reactlogo} width="70px" /> 
      </Box>
      
      
    </Stack>
        
    </Box>
  )
}
export default Skills
