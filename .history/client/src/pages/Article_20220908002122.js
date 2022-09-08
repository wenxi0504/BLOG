import React from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
    // name is from the app.js->route :name
    const { name } = useParams();
  return (
      <div>
          <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
          This is Article
          </h1>   

    </div>
  )
}

export default Article