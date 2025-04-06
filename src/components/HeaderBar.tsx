import { FC } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

const HeaderBar: FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Zaki Amin
        </Typography>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Projects</Button>
        <Button color='inherit'>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar
