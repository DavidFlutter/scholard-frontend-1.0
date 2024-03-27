import React from 'react'
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='NotFoundPage'>
      <Sidebar></Sidebar>
        <div className="tile">
          <h2>
              Sorry this page has not been created yet
          </h2>
          <Link to={"/scholard-frontend-1.0"}>
              Home
          </Link>
        </div>
    </div>
  )
}

export default NotFoundPage