import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './articleContent'
const Article = () => {
    // name is from the app.js->route :name
    const { name } = useParams();
    const article = articleContent.find((article) => article.name === name)
    if(!article) return <h1>Article does nor exists</h1>
  return (
      <>
          <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
              { article.title}
          </h1>   
          {article.content.map((paragraph, index) => (
              <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
                  { paragraph}
              </p>
           ))}
<h1> Other Articles</h1>
    </>
  )
}

export default Article