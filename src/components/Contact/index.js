import { Box, Button, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { useState } from "react"

import './styles.css'

const Contact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function submitForm() {
        if(name && email && message){
            window.open(
                `mailto:${'delic7262@gmail.com'}?subject=${encodeURIComponent(
                    subject
                )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
                    email
                )}): ${encodeURIComponent(message)}`
            )
        }
    }

    return (
        <>
            <Box className='contact-content-wrapper'>
                <Box className='flex'>
                    <Box 
                        className='title' 
                        data-aos="fade-right"
                        data-aos-duration="750"
                    >
                        CONTACT
                    </Box>
                    <Box 
                        className='underline'
                        data-aos="fade-left"
                        data-aos-duration="750"
                        data-aos-delay="250"
                    ></Box>
                    <Box data-aos="fade-left" data-aos-delay='500' data-aos-duration="750">
                        <Typography className='subtitle' >
                            Feel free to reach out with any questions or suggestions.
                        </Typography>
                    </Box>
                    
                    <Box className='flex form' data-aos="zoom-in" data-aos-delay='500' data-aos-duration="1000">
                        <input 
                            placeholder='Name' 
                            className="input"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        ></input>
                        <input 
                            placeholder='Email' 
                            className="input"
                            style={{
                                fontFamily: 'sans-serif'
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        ></input>
                        <input 
                            placeholder='Subject' 
                            className="input"
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                        ></input>
                        <textarea 
                            placeholder='Your message' 
                            className="input" 
                            style={{
                                minHeight: '150px'
                            }}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                        ></textarea>
                        <Button className="submit-button" onClick={submitForm}>SUBMIT</Button>
                    </Box>
                </Box>
            </Box>
            
            <Box className='footer'>
                <Box className='arrow-up' onClick={() => { props.handleNavClick('home') }}>
                    <KeyboardDoubleArrowUpIcon fontSize="large"/>
                </Box>
                <Box className='media-wrapper'>
                    <a 
                        className='icon-wrapper'
                        href="https://www.linkedin.com/in/hamzadelic/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon fontSize="large"/>
                    </a>
                    <a 
                        className='icon-wrapper'
                        href="https://www.instagram.com/dela9739/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon fontSize="large"/>
                    </a>
                    <a 
                        className='icon-wrapper'
                        href="https://github.com/dela444"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon fontSize="large"/>
                    </a>
                </Box>
                <Box className='copyright'>
                    Made by Hamza Delić
                </Box>
                <Box className='links-wrapper'>
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer"
                        href="https://www.freepik.com/free-photo/low-angle-grayscale-shot-business-buildings-with-cloudy-sky-background_11354102.htm"
                    >
                        Landing background image by wirestock on Freepik
                    </a>             
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer"
                        href="https://www.freepik.com/free-vector/hand-drawn-arrow-collection_12691164.htm#query=curved%20left%20arrow%20drawing&position=23&from_view=search&track=ais"
                    >
                       Arrow image by Freepik
                    </a>
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer"
                        href='https://previewed.app/template/EE8B6607'
                    >
                        Laptop mockup by Previewed
                    </a>
                </Box>
            </Box>
        </>   
    )
}

export default Contact
