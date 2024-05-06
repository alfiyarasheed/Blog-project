"use client";
import React, { useState, useEffect } from 'react';
 import { getUsers } from "./components/lib/actions/users";
 import Link from 'next/link';

import Image from "next/image"
export default  function Home() {
  let [users,setUsers]=useState([]);
   
  

useEffect(() => {

  getUsers().then((data:any) => {
    if (data.error) {
      console.error(data.error);
    } else {
      setUsers(data);
    }
  });
}, []);



  return (
    <main className="px-6 mx-auto "> 
    <p className="mt-12 mb-12 text-3xl text-center dark:text-white ">
  Home Page&nbsp; 
    <span className="whitespace-nowrap">
    </span>
    </p>
    {/* <div> */}
      <h1>Blogs </h1>
      {users.map((user:any)=>{
        return(
          <div key={user.slug}style={{ marginBottom: '20px' }} >
          <h2>
                        <Link href={`/blog/${user.slug}`}>

            <strong>{user.title}</strong>
            </Link></h2>

          <p>{user.description}</p>
          <Link href={`/blog/${user.slug}`}>
          Read More
          </Link>
          <img src={user.urlToImage} alt={user.title} width={500} height={300} />
          </div>
        );
      }
      )}
 
      </main>
   
  );
}
 