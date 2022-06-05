import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to='/'>Home</Link>     
        <Link to='/Products'>Products</Link>
        <h1>Welcome to the Home Page</h1>
        <p>Please checkout products page to see the item list</p>
    </div>
  )
}

export default Home
