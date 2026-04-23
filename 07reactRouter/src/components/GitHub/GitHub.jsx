import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  //  const [data, setData] = useState([])
  //  useEffect(() => {
  //   fetch('https://api.github.com/users/KomalGupta1995')
  //   .then(response => response.json())
  //   .then(data => {
  //      console.log(data);
  //      setData(data)
  //   })
  //  }, [])

  const data = useLoaderData()


  return (
    <>
    
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub username 
    : {data.login} <br/>
        id : {data.id} <br/>
        {/* repository : {data.repos_url}  */}
     {/* GitHub followers : {data.followers}<br/> */}
     <Link to = {data.html_url} target="_blank" className='text-red-600'>Visit Profile</Link>
      <img src = {data.avatar_url} alt='git picture' width= "300" /> 
      
    </div>
    </>
  )
}

export default GitHub


export const GithubInfoLoader = async() =>{
   const response = await fetch('https://api.github.com/users/KomalGupta1995')
   return response.json()
}