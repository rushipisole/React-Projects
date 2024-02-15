import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Cards"

function App() {
  return (

    <>
      <Navbar />
      <div className='cards'>
        <Card title="Img 1" description="Hello This is 1 image" />
        <Card title="Img 2" description="Hello This is 2 image" />
        <Card title="Img 3" description="Hello This is 3 image" />
        <Card title="Img 4" description="Hello This is 4 image" />
        <Card title="Img 5" description="Hello This is 5 image" />
      </div>
      <Footer />
    </>
  )
}

export default App
