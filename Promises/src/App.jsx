import './App.css'

function App() {

  const probj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
      let roll_no = [1, 2, 3, 4, 5]
      // resolve(roll_no)
      // reject("Error white featching the data")
      if (roll_no.length >  3) {
        resolve(roll_no)
      } else {
        reject("Error white featching the data")
      }
    }, 2000);

  })

  probj1.then((rollno) => {
    console.log(rollno)
  }).catch((rollno) => {
    console.log(rollno)
  })


  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
