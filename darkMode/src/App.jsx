import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <Alert alert="This is alert" />
      <About mode={mode} />
    </>
  )
}

export default App
