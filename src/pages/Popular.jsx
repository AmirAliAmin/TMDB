import React from 'react'
import Card from '../components/Card'

export default function Popular() {
  return (
    <div className='border w-[80%]'>
      <div className='w-45 border rounded-3xl mt-10 ml-5 '>
      <Card variant='popular'/>
      </div>
    </div>
  )
}
