import React from 'react'
import { useParams } from 'react-router-dom'

function USer() {
    const {id}=useParams()
  return (
    <div className='bg-grey-500'>USer:{id}</div>
  )
}

export default USer