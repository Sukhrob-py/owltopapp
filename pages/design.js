import React from 'react'
import CourseLayout from '../components/CourseLayout'

function design() {
  const info={
    course_title:"Photoshop",

  }
  return (
    <div className='main-content'>
      <CourseLayout info = {info}/>
    </div>
  )
}

export default design