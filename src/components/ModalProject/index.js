import { Box, Button, Modal } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useState } from 'react'

import './styles.css'


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
        <Modal
            open={props.openModal}
            onClose={handleCloseModal}
            
        >
            <Box className='modal'>
                <Box className='modal-image-wrapper'>
                    <Box className='modal-arrow modal-arrow-left' onClick={prevImage}>
                        <KeyboardArrowLeftIcon fontSize='large' />
                    </Box>
                    <Box className='modal-arrow modal-arrow-right' onClick={nextImage}>
                        <KeyboardArrowRightIcon fontSize='large' />
                    </Box>
                    {props.project && props.project.images ? (
                        <img src={props.project.images[currentImageIndex]} alt="Project" className='modal-img' />
                    ) : props.project ? (
                        <img src={props.project.imageSrc} alt="Project" className='modal-img' />
                    ): null}
                </Box>
                <Box className='modal-text-wrapper'>
                    <Box className='modal-title'>{props.project ? props.project.title : null}</Box>
                    <Box className='modal-subtitle'>{props.project ? props.project.subtitle : null}</Box>
                    <Box className='modal-description'>{props.project ? props.project.description : null}</Box>
                    {props.project && props.project.demo ? (
                        <a 
                            target='_blank' 
                            href={props.project.demo}
                            rel="noopener noreferrer"
                        >
                            <Button className='modal-button'>
                                <OpenInNewIcon fontSize='small' sx={{marginRight: '10px'}}/>
                                Watch demo video
                            </Button> 
                        </a>
                    ) : null}
                    <Box className='close-icon' onClick={handleCloseModal}>
                        <CloseIcon fontSize='large'/>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalProject
