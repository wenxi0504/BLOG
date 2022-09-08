import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="border-b-4 border-green-700 text-center bg-green-600 font-bold w-full text-lg text-white " fixed top-0>
          <ul>
              <li className='inline-block py-4'>
                  <link to="/" className='pl-6 pr-8'>Home </link>
              </li>
              <li className='inline-block py-4'>
                  <link to="/about" className='pl-6 pr-8'>About</link>
              </li>
              <li className='inline-block py-4'>
                  <link to="/articles-list" className='pl-6 pr-8'>Articles </link>
              </li>
        </ul>
      </nav>
  )
}

export default Navbar