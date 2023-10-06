import { Box } from "@mui/material"
import { useState } from "react"

import ModalProject from "../ModalProject"
import './styles.css'

const projects = [
    {
        imageSrc: '/images/SportsmanLaptop.png',
        title: 'SPORTSMAN',
        subtitle: 'SPORTS HALL RENTING PLATFORM',
        description: (
            <>
                Sportsman is a faculty project built with <strong>React</strong>, 
                <strong> Django</strong>, and<strong> SQLite</strong> that lets users discover 
                the perfect sports hall or field for their needs and provides sports hall owners
                the ability to showcase their facilities and accept reservations. The pictures 
                above represent some of my contributions to the project. You can watch a demo 
                video showcasing my contributions below.
            </>
        ),
        demo: 'https://youtu.be/Y1ygrvlY5Ho',
        images: [
            '/images/Sportsman_images/p1.PNG',
            '/images/Sportsman_images/p2.PNG',
            '/images/Sportsman_images/p3.PNG',
            '/images/Sportsman_images/p4.PNG',
            '/images/Sportsman_images/p5.PNG',
            '/images/Sportsman_images/p6.PNG',
            '/images/Sportsman_images/p7.PNG',
            '/images/Sportsman_images/p8.PNG',
            '/images/Sportsman_images/p9.PNG',
        ]
    },
    {
        imageSrc: '/images/SlidoLaptop.png',
        title: 'SLIDO',
        subtitle: 'LECTURER-AUDIENCE COMMUNICATION PLATFORM',
        description: (
            <>
                Slido is a faculty project, designed as a simplified version of the
                popular Slido app, built with <strong>Node.js</strong> and <strong>Express </strong>
                as the backend, <strong>EJS </strong>as the frontend and <strong>PostgreSQL </strong>
                as the database. This app helps lecturers communicate with the audience creating
                an interactive and engaging experience. You can watch the demo video for a quick
                overview below.
            </>
        ),
        demo: 'https://youtu.be/RbSA1YHFakE',
        images: [
            '/images/Slido_images/s1.PNG',
            '/images/Slido_images/s2.PNG',
            '/images/Slido_images/s3.PNG',
            '/images/Slido_images/s4.PNG',
            '/images/Slido_images/s5.PNG',
            '/images/Slido_images/s6.PNG',
        ]
    },
    {
        imageSrc: '/images/StudentServiceLaptop.png',
        title: 'STUDENT SERVICE',
        subtitle: 'FACULTY MANAGEMENT APP',
        description: (
            <>
                Student service is an <strong>Oracle APEX</strong> application that I developed
                during my internship program. It helps faculty administrators to manage professors,
                students and staff efficiently. Additionally, professors can manage their 
                subjects and exams, while students can apply for exams. You can watch the demo
                video for a quick overview below.
            </>
        ),
        demo: 'https://youtu.be/2897qo175Js',
        images: [
            '/images/StudentService_images/o1.PNG',
            '/images/StudentService_images/o2.PNG',
            '/images/StudentService_images/o3.PNG',
            '/images/StudentService_images/o4.PNG',
            '/images/StudentService_images/o5.PNG',
            '/images/StudentService_images/o6.PNG',
            '/images/StudentService_images/o7.PNG',
        ]
    },
    {
        imageSrc: '/images/portfolioLaptop.PNG',
        title: 'PORTFOLIO',
        subtitle: `Hamza's Portfolio: Showcasing my work and skills`,
        description: (
            <>
                This portfolio, showcasing my work and skills, is built with <strong>React</strong>.
            </>
        ),
        images: [
            '/images/portfolio1.PNG'
        ]
    },
]

const Projects = () => {
    const [openModal, setOpenModal] = useState(false)
    const [transformStyle, setTransformStyle] = useState('')
    const [opacity, setOpacity] = useState(0)
    const [rotationDegree, setRotationDegree] = useState(180)
    const [hoveredCard, setHoveredCard] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)

    function handleMouseMove(e) {
        if (hoveredCard !== null) {
            const { clientX, clientY, target } = e
            const { left, top, width, height } = target.getBoundingClientRect()
        
            const x = (clientX - left - width / 2) / (width / 2)
            const y = (clientY - top - height / 2) / (height / 2)
        
            const transform = `perspective(700px) rotateX(${y * 10}deg) rotateY(${-x * 10}deg) scale3d(1.05, 1.05, 1.05)`
        
            const cursorDistance = Math.sqrt(x * x + y * y)
            const maxOpacity = 0.7
            const minOpacity = 0.2
            const opacityRange = maxOpacity - minOpacity
            const calculatedOpacity = minOpacity + (opacityRange * cursorDistance)

            setTransformStyle(transform)
            setOpacity(calculatedOpacity)

            const maxRotationDegree = 90
            const minRotationDegree = 0
            const rotationDegreeRange = maxRotationDegree - minRotationDegree
            const calculatedRotationDegree = minRotationDegree + (rotationDegreeRange * cursorDistance)

            setRotationDegree(calculatedRotationDegree)
        }
    }

    const handleMouseEnter = (index) => {
        setHoveredCard(index)
    };

    const handleMouseLeave = () => {
        setHoveredCard(null)
        setTransformStyle('')
        setOpacity(0)
        setRotationDegree(180)
    }

    return (
        <>
            <ModalProject 
                openModal={openModal} 
                handleClose={() => {
                    setOpenModal(false)
                }} 
                project={selectedProject} 
            />
            <Box className='project-content-wrapper'>
                <Box className='flex'>
                    <Box 
                        className='title' 
                        id='title'
                        data-aos="fade-right"
                        data-aos-duration="750"
                    >
                        PROJECTS
                    </Box>
                    <Box 
                        className='underline' 
                        id='underline'
                        data-aos="fade-left"
                        data-aos-duration="750"
                        data-aos-delay="250"
                    ></Box>
                    <Box className='project-gallery'>
                        {projects.map((project, index) => (
                            <Box className='project-card-wrapper' data-aos="zoom-in-up" key={index} data-aos-duration="750">
                                <Box
                                    className="project-card"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => {
                                        setSelectedProject(project)
                                        setOpenModal(true)
                                    }}
                                >
                                    <Box
                                        className="project-image-wrapper"
                                        sx={{ transform: index === hoveredCard ? transformStyle : null}}
                                    >
                                        <Box className="project-dimension">
                                            <Box className='glassy-effect'>
                                                <Box 
                                                    className='glassy-effect2' 
                                                    sx={{ 
                                                        opacity: index === hoveredCard ? opacity : null, 
                                                        transform: index === hoveredCard ? `rotate(${rotationDegree}deg) translate(-50%, -50%)` : null 
                                                    }}
                                                ></Box>
                                            </Box>
                                            <img loading="lazy" src={project.imageSrc} alt={project.title} className="project-dimension" />
                                            <Box className="project-title-wrapper">
                                                <Box sx={{perspective: '700px'}}>
                                                    <Box className='project-title'>{project.title}</Box>
                                                </Box>
                                            </Box> 
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Projects
