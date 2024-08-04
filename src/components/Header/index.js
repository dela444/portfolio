import {
  AppBar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

import styles from './Header.module.css'

const pages = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(false)

  function handleOpenNavMenu() {
    setAnchorElNav(!anchorElNav)
  }

  function handleNavClick(page) {
    props.handleNavClick(page.toLowerCase())
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position='static'
      className={styles.appBar}
      sx={{
        position: props.isSticky ? 'sticky' : null,
        animation: props.isSticky ? 'popDown 0.5s' : null,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon fontSize='large' />
            </IconButton>
            <Box className={` ${styles.menu} ${anchorElNav ? 'open' : ''}`}>
              {pages.map((page) => (
                <MenuItem
                  className={styles.pageLink}
                  key={page}
                  onClick={() => {
                    handleNavClick(page)
                  }}
                >
                  <Typography
                    textAlign='center'
                    sx={{
                      color:
                        props.activeSection === page.toLowerCase()
                          ? '#04c2c9 !important'
                          : null,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box
                key={page}
                onClick={() => {
                  handleNavClick(page)
                }}
                className={styles.pageLink}
                sx={{
                  color:
                    props.activeSection === page.toLowerCase()
                      ? '#04c2c9 !important'
                      : null,
                }}
              >
                {page}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
