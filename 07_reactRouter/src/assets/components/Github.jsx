import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState,useEffect } from "react";

function Github (){
   const data = useLoaderData()

   //     const [data, setData] = useState([])
   //     useEffect(() => {
   //       fetch('https://api.github.com/users/hiteshchoudhary')
   //       .then(response => response.json())
   //       .then(data => {
   //         setData(data)
   //       })
   //  }, [])
   // component renders, data is fetched, state is updated which re renders thus falling into the cycle

   return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
         Github Followes : {data.followers}
         <img src={data.avatar_url} />
      </div>
   )
}

export default Github

export const gitHubInfoLoader = async () => {

   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}
