import { FC } from 'react'
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import BuildIcon from '@mui/icons-material/Build'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import Stack from '@mui/material/Stack'

const HeaderBar: FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
          Zaki Amin
        </Typography>
        <ButtonGroup variant='contained' color='secondary'>
          <Button sx={{ backgroundColor: '#4e2fb5' }}>
            <Stack direction='row' spacing={1}>
              <span>about</span>
              <NewspaperIcon />
            </Stack>
          </Button>
          <Button sx={{ backgroundColor: '#6b4936' }}>
            <Stack direction='row' spacing={1}>
              <span>portfolio</span>
              <BuildIcon />
            </Stack>
          </Button>
          <Button sx={{ backgroundColor: '#69670e' }}>
            <Stack direction='row' spacing={1}>
              <span>contact</span>
              <EmojiPeopleIcon />
            </Stack>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar
