import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
    const {id}=useParams();
    const [value, setvalue] = useState({})

    useEffect(() => {
      if(id){
        const nandu1=async()=>{
            let r=await axios.get(`http://localhost:8080/data/${id}`);
            setvalue(r.data);}
            nandu1();
      }    
    }, [id])
    
  return (
    <h1>Product id:{id}
    <div>Name: {value.name}</div>
    </h1>
  )
}

export default Product