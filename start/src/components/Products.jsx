import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Products = () => {
    const [list, setlist] = useState([])
    useEffect(() => {
    const nandu=async()=>{
    let r=await axios.get('http://localhost:8080/data');
    setlist(r.data);}
    nandu();      
    }, [])
    
  return (
    <div>
        <Home/>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>more details</th>
                </tr>
            </thead>
            <tbody>
            {list.map(e=>
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>    <Link to={`/Products/${e.id}`}><button>Show more</button></Link></td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Products