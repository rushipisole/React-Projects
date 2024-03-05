import axios from 'axios'
import './App.css'
import React from 'react'
import { useEffect, useState } from "react"



function App() {
  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState("")



  const getMyData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data)
    } catch (error) {
      setIsError(error.message)
    }
  }

  useEffect(() => {
    getMyData();
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setMyData(res.data))
  }, [])
  return (
    <>
      <h1>Axios Data</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div>
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
