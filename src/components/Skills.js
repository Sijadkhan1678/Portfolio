import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import reactlogo from '../images/react.png'
import js from '../images/js.png'
import html5 from '../images/html5.png'



const Skills = () => {
    return (
        <Box bgcolor="black[500]" p='1rem' mt={5}>

            <Typography variant='h4' textAlign="left" ml={6.4} fontSize={33} fontWeight="530" letterSpacing={2.6} >
                Skills
            </Typography>
            <Stack flexDirection="row" justifyContent="space-around" px={2} flexWrap='wrap' mt={5.5}>
                <Box>
                    <img src={reactlogo} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign='center'>
                        React js
                    </Typography>

                </Box>
                <Box textAlign="center">
                    <img src={js} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign={js ? "justify":"center"}>
                        Javascript
                    </Typography>

                </Box>

                <Box>
                    <img src={html5} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign='center'>
                        Html5
                    </Typography>

                </Box>

                <Box>
                    <img src={reactlogo} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign='center'>
                        React js
                    </Typography>

                </Box>
                <Box>
                    <img src={reactlogo} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign='center'>
                        React js
                    </Typography>

                </Box>
                <Box>
                    <img src={html5} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign='center'>
                        Html5
                    </Typography>

                </Box>
                <Box>
                    <img src={html5} width="40px" />
                    <Typography variant='h6' mt={1.3} textAlign='center'>
                        Html5
                    </Typography>

                </Box>

               




            </Stack>

        </Box>
    )
}
export default Skills
