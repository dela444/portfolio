import { Box } from '@mui/material'
import { useState } from 'react'

import ModalProject from '../ModalProject'
import styles from './Projects.module.css'

const projects = [
  {
    imageSrc: '/images/ChatAppLaptop.png',
    title: 'CHAT APP',
    subtitle: 'REAL-TIME CHAT APPLICATION',
    description: (
      <>
        This is a real-time chat application built with <strong>Node.js</strong>
        , <strong>React.js</strong>, <strong>Socket.IO</strong>,{' '}
        <strong>Redis</strong> and <strong>PostgreSQL</strong>. The application
        includes features like user registration and authentication, rate
        limiting and real-time messaging with chat rooms and private messages.
        Users can create and join chat rooms and the application implements
        message status tracking. The backend of the application has been tested
        using <strong>Jest</strong> . You can watch the demo video for a quick
        overview below.
      </>
    ),
    demo: 'https://www.youtube.com/watch?v=Ii9fKDRG1-c',
    images: [
      '/images/ChatApp_images/c1.png',
      '/images/ChatApp_images/c2.png',
      '/images/ChatApp_images/c3.png',
      '/images/ChatApp_images/c4.png',
      '/images/ChatApp_images/c5.png',
      '/images/ChatApp_images/c6.png',
    ],
  },
  {
    imageSrc: '/images/SweetDesignLaptop.png',
    title: 'SWEET DESIGN',
    subtitle: 'CUSTOM CAKE ORDERING APPLICATION',
    description: (
      <>
        Sweet Design is my graduation project, built with <strong>React</strong>
        ,<strong> Node.js</strong> and <strong>PostgreSQL</strong> that allows
        users to order custom cakes by choosing from existing designs, uploading
        their own designs or using a design tool to create their perfect cake.
        The application includes user and admin interface for managing orders,
        users and cake designs. You can watch a short demo video showcasing some
        of the implemented functionalities below.
      </>
    ),
    demo: 'https://youtu.be/4s3l-frl9TA',
    images: [
      '/images/SweetDesign_images/sd1.png',
      '/images/SweetDesign_images/sd2.png',
      '/images/SweetDesign_images/sd3.png',
      '/images/SweetDesign_images/sd4.png',
      '/images/SweetDesign_images/sd5.png',
      '/images/SweetDesign_images/sd6.png',
      '/images/SweetDesign_images/sd7.png',
      '/images/SweetDesign_images/sd8.png',
      '/images/SweetDesign_images/sd9.png',
      '/images/SweetDesign_images/sd10.png',
      '/images/SweetDesign_images/sd11.png',
      '/images/SweetDesign_images/sd12.png',
      '/images/SweetDesign_images/sd13.png',
      '/images/SweetDesign_images/sd14.png',
      '/images/SweetDesign_images/sd15.png',
      '/images/SweetDesign_images/sd16.png',
      '/images/SweetDesign_images/sd17.png',
      '/images/SweetDesign_images/sd18.png',
      '/images/SweetDesign_images/sd19.png',
      '/images/SweetDesign_images/sd20.png',
      '/images/SweetDesign_images/sd21.png',
      '/images/SweetDesign_images/sd22.png',
      '/images/SweetDesign_images/sd23.png',
      '/images/SweetDesign_images/sd24.png',
      '/images/SweetDesign_images/sd25.png',
      '/images/SweetDesign_images/sd26.png',
      '/images/SweetDesign_images/sd27.png',
      '/images/SweetDesign_images/sd28.png',
      '/images/SweetDesign_images/sd29.png',
      '/images/SweetDesign_images/sd30.png',
      '/images/SweetDesign_images/sd31.png',
      '/images/SweetDesign_images/sd32.png',
      '/images/SweetDesign_images/sd33.png',
      '/images/SweetDesign_images/sd34.png',
      '/images/SweetDesign_images/sd35.png',
      '/images/SweetDesign_images/sd36.png',
      '/images/SweetDesign_images/sd37.png',
      '/images/SweetDesign_images/sd38.png',
      '/images/SweetDesign_images/sd39.png',
      '/images/SweetDesign_images/sd40.png',
      '/images/SweetDesign_images/sd41.png',
      '/images/SweetDesign_images/sd42.png',
    ],
  },
  {
    imageSrc: '/images/SportsmanLaptop.png',
    title: 'SPORTSMAN',
    subtitle: 'SPORTS HALL RENTING PLATFORM',
    description: (
      <>
        Sportsman is a faculty project built with <strong>React</strong>,
        <strong> Django</strong>, and<strong> SQLite</strong> that lets users
        discover the perfect sports hall or field for their needs and provides
        sports hall owners the ability to showcase their facilities and accept
        reservations. The pictures above represent some of my contributions to
        the project. You can watch a demo video showcasing my contributions
        below.
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
    ],
  },
  {
    imageSrc: '/images/StudentServiceLaptop.png',
    title: 'STUDENT SERVICE',
    subtitle: 'FACULTY MANAGEMENT APP',
    description: (
      <>
        Student service is an <strong>Oracle APEX</strong> application that I
        developed during my internship program. It helps faculty administrators
        to manage professors, students and staff efficiently. Additionally,
        professors can manage their subjects and exams, while students can apply
        for exams. You can watch the demo video for a quick overview below.
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
    ],
  },
  {
    imageSrc: '/images/SlidoLaptop.png',
    title: 'SLIDO',
    subtitle: 'LECTURER-AUDIENCE COMMUNICATION PLATFORM',
    description: (
      <>
        Slido is my first major faculty project, designed as a simplified
        version of the popular Slido app, built with <strong>Node.js</strong>{' '}
        and <strong>Express </strong>
        as the backend, <strong>EJS </strong>as the frontend and{' '}
        <strong>PostgreSQL </strong>
        as the database. This app helps lecturers communicate with the audience
        creating an interactive and engaging experience. You can watch the demo
        video for a quick overview below.
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
    ],
  },
  {
    imageSrc: '/images/portfolioLaptop.PNG',
    title: 'PORTFOLIO',
    subtitle: `Portfolio: Showcasing my work and skills`,
    description: (
      <>
        This portfolio, showcasing my work and skills, is built with{' '}
        <strong>React</strong>.
      </>
    ),
    images: ['/images/portfolio1.PNG'],
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

      const transform = `perspective(700px) rotateX(${y * 10}deg) rotateY(${
        -x * 10
      }deg) scale3d(1.05, 1.05, 1.05)`

      const cursorDistance = Math.sqrt(x * x + y * y)
      const maxOpacity = 0.7
      const minOpacity = 0.2
      const opacityRange = maxOpacity - minOpacity
      const calculatedOpacity = minOpacity + opacityRange * cursorDistance

      setTransformStyle(transform)
      setOpacity(calculatedOpacity)

      const maxRotationDegree = 90
      const minRotationDegree = 0
      const rotationDegreeRange = maxRotationDegree - minRotationDegree
      const calculatedRotationDegree =
        minRotationDegree + rotationDegreeRange * cursorDistance

      setRotationDegree(calculatedRotationDegree)
    }
  }

  const handleMouseEnter = (index) => {
    setHoveredCard(index)
  }

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
      <Box className={styles.content}>
        <Box className='flex'>
          <Box
            className='title'
            id={styles.title}
            data-aos='fade-right'
            data-aos-duration='750'
          >
            PROJECTS
          </Box>
          <Box
            className='underline'
            id={styles.underline}
            data-aos='fade-left'
            data-aos-duration='750'
            data-aos-delay='250'
          ></Box>
          <Box className={styles.projectGallery}>
            {projects.map((project, index) => (
              <Box
                className={styles.projectCardWrapper}
                data-aos='zoom-in-up'
                key={index}
                data-aos-duration='750'
              >
                <Box
                  className={styles.projectCard}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    setSelectedProject(project)
                    setOpenModal(true)
                  }}
                >
                  <Box
                    className={styles.imageWrapper}
                    sx={{
                      transform: index === hoveredCard ? transformStyle : null,
                    }}
                  >
                    <Box className={styles.projectDimension}>
                      <Box className={styles.glassyEffect}>
                        <Box
                          className={styles.glassyEffect2}
                          sx={{
                            opacity: index === hoveredCard ? opacity : null,
                            transform:
                              index === hoveredCard
                                ? `rotate(${rotationDegree}deg) translate(-50%, -50%)`
                                : null,
                          }}
                        ></Box>
                      </Box>
                      <img
                        loading='lazy'
                        src={project.imageSrc}
                        alt={project.title}
                        className={styles.projectDimension}
                      />
                      <Box className={styles.titleWrapper}>
                        <Box sx={{ perspective: '700px' }}>
                          <Box className={styles.projectTitle}>
                            {project.title}
                          </Box>
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
