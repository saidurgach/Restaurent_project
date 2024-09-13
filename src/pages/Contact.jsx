import { Box, Paper, Table, TableCell, TableContainer, TableHead, Typography,TableRow, TableBody } from '@mui/material'
import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';


const Contact = () => {
  return (
    <> 
      <Box sx={{my:5,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">
          Contact My Restaurent
        </Typography>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries,
           but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           
      </Box>
      <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{width:"300px"}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',}}align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}} />1800-00-0000(tollfree)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                <AttachEmailIcon sx={{color:"skyblue",pt:1}} />food@myrest.com
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                <CallIcon sx={{color:"green",pt:1}} />1234567890
                </TableCell>
                </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </>
  )
}

export default Contact
