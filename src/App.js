import { useState } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  console.log({ email, id })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleId = (e) => {
    setId(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, id })
    axios.get('https://gorest.co.in/public/v2/users', {
      email: email,
      id: id
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  //check console for all the employes details
  // directly fetch from api

  //test1 and test2 these all different 
  //if you use test.js then you get the user data on home page

  return (
    <div className="App">
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={id} onChange={handleId} type="text" /> <br />
      <button onClick={handleApi} >Login</button>
    </div>
  );
}

export default App;