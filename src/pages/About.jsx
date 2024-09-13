import { Box, Typography } from '@mui/material'
import React from 'react'


const About = () => {
  return (
    <>
     <Box sx={{
      my:15,
      textAlign:"center",
      "& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:"2rem",

      },
      "& p":{
        textAlign:"justify"
      },
      "@media (max-width:600px)":{
        mt:0,
        "& h4" :{
          fontSize:"1.5rem",
        }
      },


     }}>
      <Typography variant="h4">
        Welcome To My Restaurent
      </Typography>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <br />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>

     </Box>
    </>
  )
}

export default About
