import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import { typography } from '@mui/system'
import './Review.css'
import { Button } from '@mui/material'
import Home from '../Home/Home'
import useAuth from '../../hooks/useAuth'

const Review = () => {
  const [review, setReview] = React.useState('')
  const [show, setShow] = React.useState('')
  const { user } = useAuth()

 const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    setReview(value)
    e.target.value = ''
 }
 
  const handleSubmit = (e) => {
     const userReview = {
       comment: review,
       reviewer: user.email
     }
     fetch('http://localhost:5000/reviews', {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(userReview),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.insertedId) {
         }
       })
    console.log(review)
    setReview('')
    e.preventDefault()
  }
   
  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        Comment here
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{
            width: 500,
            maxWidth: '100%',
            mb: 1
          }}
          name= 'comment'
          id='box'
          label='Type Your Comment'
          onBlur={handleOnChange}
        />
        <br />
        <Button sx={{ width: '25%', m: 1 }} type='submit' variant='contained'>
          Submit
        </Button>
      </form>
    </Box>
  )
   
}

export default Review
