import React from 'react'
import axios from 'axios'

const getProduct = async () =>{
  const { data } = await axios.get('{$process.env.API_URL}/api/products')
  return data
}

const Homepage = async () => { //server component

    const productsData = await getProduct()

  return  <ListProducts data={productsData}/>
}

export default Homepage