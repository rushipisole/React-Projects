import Child1 from './components/Child1'
import './App.css'
import { createContext } from 'react'


const data = createContext();
const data1 = createContext();
function App() {

  const name = "Rushiiiiiii"
  const lastname = "Pisoleeee"

  return (
    <>

      <data.Provider value={name}>
        <data1.Provider value={lastname}>
          <Child1 />
        </data1.Provider>
      </data.Provider>
    </>
  )

}

export default App
export { data, data1 };
