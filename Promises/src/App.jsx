import './App.css'

function App() {

  const probj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
      let roll_no = [1, 2, 3, 4, 5]
      // resolve(roll_no)
      // reject("Error white featching the data")
      if (roll_no.length > 3) {
        resolve(roll_no)
      } else {
        reject("Error white featching the data")
      }
    }, 2000);

  })


  const getBioData = (indexData) => {
    return new Promise((resolve, reject) => {
      setTimeout((indexData) => {
        let biodata = {
          name: 'Rushi',
          age: '20',
        }
        resolve(`My name is ${biodata.name} roll number is ${indexData} and my age is ${biodata.age} `)
      }, 2000, indexData);
    })
  }

  probj1.then((rollno) => {
    console.log(rollno)
    return getBioData(rollno[1])

  }).then((newPromise) => {
    console.log(newPromise)
  })

    .catch((rollno) => {
      console.log(rollno)
    })


  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
