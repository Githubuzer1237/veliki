import React from 'react'
import './Title.scss'
const Title = ({ name = "Категория скоро будет"}) => {
  return (
   <>
   <h2 className='title'>{name}</h2>
   </>
  )
}

export default Title