import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './PortfolioPage.module.css'
import Header from '../Header'
import Contact from '../Contact'
import About from '../About'
import Projects from '../Projects'

const PortfolioPage = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    function handleScroll() {
      const aboutOffset = document.getElementById('about').offsetTop - 1
      const projectOffset = document.getElementById('projects').offsetTop
      const contactOffset = document.getElementById('contact').offsetTop
      const scrollPosition = window.scrollY

      setIsSticky(scrollPosition >= aboutOffset)

      if (scrollPosition >= contactOffset - 50) {
        setActiveSection('contact')
      } else if (scrollPosition >= projectOffset - 50) {
        setActiveSection('projects')
      } else if (scrollPosition >= aboutOffset) {
        setActiveSection('about')
      } else {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    AOS.init({ offset: 100 })
  }, [])

  function handleNavClick(page) {
    const element = document.getElementById(page)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Box className={styles.homeSection} id='home'>
        <Box className={styles.backgroundImage}></Box>
        <Box className={`flex ${styles.headlineWrapper}`}>
          <Box className={styles.headline}>
            <Typography>
              Hello, I'm <span>Hamza Delić</span>.
            </Typography>
            <Typography>I'm a Junior software developer.</Typography>
          </Box>
        </Box>
        <Box className={styles.socialMedia}>
          <Box>
            <a
              className={styles.iconWrapper}
              href='https://www.linkedin.com/in/hamzadelic/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon fontSize='large' />
            </a>
          </Box>
          <Box>
            <a
              className={styles.iconWrapper}
              href='https://www.instagram.com/dela9739/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon fontSize='large' />
            </a>
          </Box>
          <Box>
            <a
              className={styles.iconWrapper}
              href='https://github.com/dela444'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </Box>
        </Box>
        <Box className={`${styles.arrow} ${styles.bounce}`}>
          <Box
            className={styles.arrowBox}
            onClick={() => {
              handleNavClick('about')
            }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: '3.2rem' }} />
          </Box>
        </Box>
      </Box>

      <Header
        isSticky={isSticky}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <Box id='about'>
        <About />
      </Box>

      <Box id='projects'>
        <Projects />
      </Box>

      <Box id='contact'>
        <Contact handleNavClick={handleNavClick} />
      </Box>
    </>
  )
}

export default PortfolioPage
