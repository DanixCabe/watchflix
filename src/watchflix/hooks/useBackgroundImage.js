import {  useState } from 'react';

export const useBackgroundImage = () => {
    const [nameBackgroundImage, setNameBackgroundImage] = useState('')
    const [backgroundImage, setBackgroundImage] = useState('')
    const [idBackgroundImage, setIdNameBackgroundImage] = useState('')
    
    const setNameBackground = (titleMovie) => {
        setNameBackgroundImage(titleMovie)
    }
    
    const setBackground = (titleMovie) => {
        setBackgroundImage(titleMovie)
    }

    const setIdBackground = (titleMovie) => {
        setIdNameBackgroundImage(titleMovie)
    }


    return {
        setNameBackground,
        setBackground,
        setIdBackground,
        nameBackgroundImage,
        backgroundImage,
        idBackgroundImage,
    }
}