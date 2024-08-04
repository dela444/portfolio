import { Box, Button, Modal } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useState } from 'react'

import styles from './ModalProject.module.css'

const ModalProject = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function nextImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  function prevImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.project.images.length - 1 : prevIndex - 1
    )
  }

  function handleCloseModal() {
    setCurrentImageIndex(0)
    props.handleClose()
  }

  return (
    <Modal open={props.openModal} onClose={handleCloseModal}>
      <Box className={styles.modal}>
        <Box className={styles.imageWrapper}>
          <Box className={styles.arrowLeft} onClick={prevImage}>
            <KeyboardArrowLeftIcon fontSize='large' />
          </Box>
          <Box className={styles.arrowRight} onClick={nextImage}>
            <KeyboardArrowRightIcon fontSize='large' />
          </Box>
          {props.project && props.project.images ? (
            <img
              loading='lazy'
              src={props.project.images[currentImageIndex]}
              alt='Project'
              className={styles.img}
            />
          ) : props.project ? (
            <img
              loading='lazy'
              src={props.project.imageSrc}
              alt='Project'
              className={styles.img}
            />
          ) : null}
        </Box>
        <Box className={styles.descriptionSection}>
          <Box className={styles.title}>
            {props.project ? props.project.title : null}
          </Box>
          <Box className={styles.subtitle}>
            {props.project ? props.project.subtitle : null}
          </Box>
          <Box className={styles.description}>
            {props.project ? props.project.description : null}
          </Box>
          {props.project && props.project.demo ? (
            <a
              target='_blank'
              href={props.project.demo}
              rel='noopener noreferrer'
            >
              <Button className={styles.button}>
                <OpenInNewIcon fontSize='small' sx={{ marginRight: '10px' }} />
                Watch demo video
              </Button>
            </a>
          ) : null}
          <Box className={styles.closeIcon} onClick={handleCloseModal}>
            <CloseIcon fontSize='large' />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalProject
