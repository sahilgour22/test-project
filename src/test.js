import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry); 
  }

    return(
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}

                    />
                </div>

                <button type="submit">Login</button>
            </form>

            <div>
                  {
                    allEntry.map((curElem) => {
                      return(
                        <div className='showDetails'>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>
                        </div>
                      )
                    })
                  }
            </div>
        </>
    )
}

export default App