import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './articleContent'
const Article = () => {
    // name is from the app.js->route :name
    const { name } = useParams();
    const article = articleContent.find((article) => article.name===name)
  return (
      <div>
          <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
              This is the { name } Article
          </h1>   

    </div>
  )
}

export default Article