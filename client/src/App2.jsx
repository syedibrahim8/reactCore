import React from 'react'
import { useEffect,useState } from 'react'

function App2() {
    const [count,update] = useState(0)
    const [age,setAge] = useState(0)

    //1st useEffect(()=>{})
        // useEffect(()=>{
            // console.log("Hi iam from 1st method")})
            // I will also come on when any state or variable changes basically comes at every change on the browser
    // })

    //2nd useEffect(()=>{},[])
    // useEffect(()=>{
        // console.log("Hello iam from 2nd method")
        // },[])
        //once on page loads
        // if you keep an empty array => dependency array
        // it will only come once when the page loads

    // 3rd useEffect(()=>{},[count])
    useEffect(()=>{
        console.log("Hello Iam from 3rd Method")
    },[count])
    //1. it will come always on page load/reload
    //2. and it will also come when there is a change in state which is in target dependency
  return (
    <>
    <h1>Hello World</h1>
    <p>Count : {count}</p>
    <button className='bg-blue-500 text-white text-xl font-bold rounded-xl p-2 m-2 cursor-pointer' onClick={()=>update(count+1)}>Add by 1</button>
    <button className='bg-blue-500 text-white text-xl font-bold rounded-xl p-2 m-2 cursor-pointer' onClick={()=>update(count-1)}>Sub by 1</button>
    <p>Age : {age}</p>
     <button className='bg-blue-500 text-white text-xl font-bold rounded-xl p-2 m-2 cursor-pointer' onClick={()=>setAge(count+1)}>Add by 1</button>
    <button className='bg-blue-500 text-white text-xl font-bold rounded-xl p-2 m-2 cursor-pointer' onClick={()=>setAge(count-1)}>Sub by 1</button>
    </>
  )
}

export default App2;