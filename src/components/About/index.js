import { Box } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

import styles from './About.module.css'

const About = () => {
  return (
    <Box className={styles.content}>
      <Box className='flex'>
        <Box
          className='title'
          id={styles.title}
          data-aos='fade-right'
          data-aos-duration='750'
        >
          ABOUT ME
        </Box>
        <Box
          className='underline'
          id={styles.underline}
          data-aos='fade-left'
          data-aos-duration='750'
          data-aos-delay='250'
        ></Box>
        <Box className={styles.aboutMeSection}>
          <Box
            className={styles.imgWrapper}
            data-aos='fade-up'
            data-aos-delay='500'
            data-aos-duration='1000'
          >
            <Box className={styles.img}>
              <img
                src='/images/portrait_image.png'
                className={styles.portrait}
                alt='Portrait'
              />
            </Box>
          </Box>
          <Box
            className={styles.textBox}
            data-aos='fade-up'
            data-aos-delay='500'
            data-aos-duration='1000'
          >
            <Box className={styles.text}>
              I'm a passionate IT graduate with an associate degree from the
              Faculty of Science in Sarajevo. As a{' '}
              <strong>Junior software developer</strong>, I'm on an exciting
              journey of <strong>learning</strong> and
              <strong> growth </strong>in the world of technology. My academic
              journey provided opportunities to work on diverse software
              development projects, honing my skills and gaining valuable
              experience both independently and as part of a team.
            </Box>
            <Box className={styles.resumeWrapper}>
              <Box className={styles.resume}>
                <a
                  download
                  href='/Hamza Delić CV.pdf'
                  className={styles.resumeButton}
                >
                  <DownloadIcon fontSize='medium' />
                  Download Resume
                </a>
              </Box>
              <Box className={styles.arrowLeftWrapper}>
                <img
                  src='/images/left-arrow.png'
                  className={styles.arrowLeft}
                  alt='Left arrow'
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.angledDiv}>
          <Box className={styles.experienceText}>
            So far in my studies I've gained experience with backend development
            using <span>Node.js</span> and <span>Django</span>. As of now, I've
            primarily used
            <span> React</span> as my frontend framework. In addition, I've
            gained familiarity with Oracle APEX and worked with databases such
            as <span>PostgreSQL</span>,<span> SQLite</span> and{' '}
            <span>Oracle</span>.
          </Box>
        </Box>
        <Box className={styles.contactAndEducationSection}>
          <Box
            className={styles.contactInfo}
            data-aos='fade-right'
            data-aos-duration='750'
          >
            <Box>
              <Box className={styles.contactInfoTitle}>Contact info</Box>
              <Box className={styles.info}>Hamza Delić</Box>
              <Box className={styles.info}>
                Sarajevo, Bosnia and Herzegovina
              </Box>
              <Box className={styles.info}>Email: delic7262@gmail.com</Box>
              <Box className={styles.info}>Tel: 062-297-160</Box>
            </Box>
          </Box>
          <Box
            className={styles.experienceWrapper}
            data-aos='fade-left'
            data-aos-duration='750'
          >
            <Box className={styles.experience}>
              <Box className={styles.experienceTitle}>EDUCATION</Box>
              <Box className={styles.experienceDetails}>
                <Box className={styles.experienceName}>
                  University of Sarajevo
                </Box>
                <Box className={styles.experienceDuration}>
                  <em>Information technology</em> <span>•</span> October 2021 -
                  July 2024
                </Box>
                <Box className={styles.experienceDescription}>
                  Faculty of Science
                </Box>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.experienceTitle}>WORK</Box>
              <Box className={styles.experienceDetails}>
                <Box className={styles.experienceName}>KingICT</Box>
                <Box className={styles.experienceDuration}>
                  <em>Software Developer Intern</em> <span>•</span> April 2023 -
                  May 2023
                </Box>
                <Box className={styles.experienceDescription}>
                  Developing Student service app using Oracle APEX
                </Box>
              </Box>
            </Box>
            <Box className={styles.experience}>
              <Box className={styles.experienceTitle}>SKILLS</Box>
              <Box className={styles.experienceDetails}>
                <Box className={styles.experienceName}>
                  So far I've worked with:
                </Box>
                <Box className={styles.experienceLanguages}>
                  <Box>
                    <Box>JavaScript</Box>
                    <Box>Node.js</Box>
                    <Box>Express.js</Box>
                  </Box>
                  <Box>
                    <Box>React.js</Box>
                    <Box>Python</Box>
                    <Box>Django</Box>
                  </Box>
                  <Box>
                    <Box>Java</Box>
                    <Box>Oracle APEX</Box>
                    <Box>C++</Box>
                  </Box>
                  <Box>
                    <Box>PostgreSQL</Box>
                    <Box>SQLite</Box>
                    <Box>Oracle</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About
