import { FC } from 'react'
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
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
          <Button color='secondary'>
            <Stack direction='row' spacing={1}>
              <span>about</span>
              <NewspaperIcon />
            </Stack>{' '}
          </Button>
          <Button color='secondary'>
            <Stack direction='row' spacing={1}>
              <span>portfolio</span>
              <MenuBookIcon />
            </Stack>
          </Button>
          <Button color='secondary'>
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
