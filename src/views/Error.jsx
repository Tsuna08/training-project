import React from 'react'
import { Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import pageError from '../assets/404Page.jpg'

export default function Error() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${pageError})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        m: 0,
        p: 0,
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
      }}
      alt="404 page not found"
    >
      <Button component={RouterLink} to={`/`} sx={{ cursor: 'pointer', color: 'white', mb: 4 }}>
        Go home
      </Button>
    </Box>
  )
}
