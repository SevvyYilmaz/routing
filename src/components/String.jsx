import React from 'react'
import { useParams } from 'react-router-dom'

const String = () => {
    const {word, color, bgcolor} = useParams()

    return (
    <div className='container'>
        {
            isNaN(word) ?
            <h1 style={{color: color, backgroundColor: bgcolor}}>The word is: {word}</h1> :
            <h1 style={{color: color, backgroundColor: bgcolor}}>The number is: {word}</h1>
        }


    </div>
    )
}

export default String