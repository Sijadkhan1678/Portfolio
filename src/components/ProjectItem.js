import React from 'react'
import blog from '../images/blog-project.png'


import { Paper,Grid,Typography,Box,Button, Stack } from '@mui/material'


export const BlogItem = () => {



  return (

    <Grid item xs={10.3} md={3.5} >
      <Paper elevation={6.4}>
        {/* <Link to='/blog:${slug}'>     */}
        {/* place Image */}
        <img src={blog} height="324" width="100%" />

        <Box mt={2.4} pl={1.5} >

          <Typography variant='h3'
            fontWeight='500'
            fontSize='1rem'
          >
            {/* Blog Website */}
          </Typography>

          <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1.3}>
            {/* 20/11/2022 */}
            {/* {date} */}
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


export default BlogItem