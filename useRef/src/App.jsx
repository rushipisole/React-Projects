import { useRef, useState } from 'react'
import './App.css'

const UseRef = () => {
  const [myData, setMyData] = useState(0)
  const inputElem = useRef("");

  const changeStyle = () => {
    inputElem.current.style.backgroundColor = "Red";
   
  }
  return (
    <>
      <input ref={inputElem} value={myData} type="text" onChange={(e) => setMyData(e.target.value)} /> <br />
      <button onClick={changeStyle} > Submit</button>
    </>
  )

}

export default UseRef
