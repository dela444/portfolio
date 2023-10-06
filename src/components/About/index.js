import { Box } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download'

import './styles.css'

const About = () => {
    return (
        <Box className='about-content-wrapper'>
            <Box className='flex'>
                <Box 
                    className='title' 
                    id='about-title' 
                    data-aos="fade-right"
                    data-aos-duration="750"
                >
                    ABOUT ME
                </Box>
                <Box 
                    className='underline' 
                    id='about-underline' 
                    data-aos="fade-left"
                    data-aos-duration="750"
                    data-aos-delay="250"
                ></Box>
                <Box className='about-wrapper-first'>
                    <Box 
                        className='about-img-wrapper' 
                        data-aos="fade-up" 
                        data-aos-delay='500' 
                        data-aos-duration="1000"
                    >
                        <Box className="about-img">
                            <img src='/images/portrait_image.png' className="portrait-img" alt="Portrait"/>
                        </Box> 
                    </Box>
                    <Box 
                        className='about-text-wrapper'
                        data-aos="fade-up" 
                        data-aos-delay='500' 
                        data-aos-duration="1000"
                    >
                        <Box className='about-text'>
                            I'm a passionate IT student at the Faculty of Science
                            in Sarajevo. As a <strong>Junior software developer</strong>, 
                            I'm on an exciting journey of <strong>learning</strong> and 
                            <strong> growth </strong>in the world of technology. My academic
                            journey has provided opportunities to work on diverse software
                            development projects, honing my skills and gaining valuable
                            experience both independently and as part of a team.
                        </Box>
                        <Box className='resume-wrapper'>
                            <Box className='resume'>
                                <a download href="/Hamza Delić CV.pdf" className="resume-button">
                                    <DownloadIcon fontSize="medium"/>
                                    Download Resume
                                </a>
                            </Box>
                            <Box className='left-arrow-wrapper'>
                                <img src='/images/left-arrow.png' className='left-arrow' alt="Left arrow" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='angled-div'>
                    <Box className='contact-info-text'>
                        So far in my studies I've gained experience with backend
                        development using <span>Node.js</span> and <span>Django</span>. As of now, I've primarily used 
                        <span> React</span> as my frontend framework. In addition, I've gained familiarity
                        with Oracle APEX and worked with databases such as <span>PostgreSQL</span>,
                        <span> SQLite</span> and <span>Oracle</span>.
                    </Box>
                </Box>    
                <Box className='about-wrapper-second'>
                    <Box 
                        className='contact-info' 
                        data-aos="fade-right"
                        data-aos-duration="750"
                    >
                        <Box>
                           <Box className='contact-info-title'>Contact info</Box>
                            <Box className='info'>Hamza Delić</Box>
                            <Box className='info'>Sarajevo, Bosnia and Herzegovina</Box>
                            <Box className='info'>Email: delic7262@gmail.com</Box> 
                            <Box className='info'>Tel: 062-297-160</Box> 
                        </Box>
                    </Box>
                    <Box 
                        className='expirience-wrapper' 
                        data-aos="fade-left" 
                        data-aos-duration="750"
                    >
                        <Box className='expirience'>
                            <Box className='expirience-title'>
                                EDUCATION
                            </Box>
                            <Box className='expirience-details'>
                                <Box className='expirience-name'>University of Sarajevo</Box>
                                <Box className='expirience-duration'><em>Information technology</em> <span>•</span> Present</Box>
                                <Box className='expirience-description'>Faculty of Science</Box>
                            </Box>
                        </Box>
                        <Box className='expirience'>
                            <Box className='expirience-title'>
                                WORK
                            </Box>
                            <Box className='expirience-details'>
                                <Box className='expirience-name'>KingICT</Box>
                                <Box className='expirience-duration'><em>Software Developer Intern</em> <span>•</span> April 2023 - May 2023</Box>
                                <Box className='expirience-description'>Developing Student service app using Oracle APEX</Box>
                            </Box>
                        </Box>
                        <Box className='expirience'>
                            <Box className='expirience-title'>
                                SKILLS
                            </Box>
                            <Box className='expirience-details'>
                                <Box className='expirience-name'>So far I've worked with:</Box>
                                <Box className='expirience-languages'>
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
