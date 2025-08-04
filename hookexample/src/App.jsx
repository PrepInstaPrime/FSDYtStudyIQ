import React,{ useRef, useEffect, useState} from 'react'
import './App.css'
export default function App() {
  const [count, setCount] =useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  let nameRef= useRef(null);
  let emailRef= useRef(null); 
  function increment() {
    setCount(count + 1);
    console.log('Counter incremented:', count + 1);
  }
  function reset() {
    setCount(0);
    // console.log('Counter reset:', 0);
  }
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setTimeSpent(prevTime => prevTime + 1);
    // }, 1000);
    // return () => clearInterval(interval);
    const interval= setTimeout(() => {
      setTimeSpent(prevTime => prevTime + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [timeSpent]);


  // let handleChange = (e) => {
  //   // console.log(e.target.value);
  //   if (e.target.name === 'name') {
  //     setName(e.target.value);
  //   } else if (e.target.name === 'email') {
  //     setEmail(e.target.value);
  //   }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setName(nameRef.current.value);
    // setEmail(emailRef.current.value);
    console.log('Form submitted with Name:', nameRef.current.value, 'Email:', emailRef.current.value);
  }
  return (
    <>
    <div className="App">
       <h1>Time spent on page</h1>
      <p>{timeSpent} seconds</p>
      <h1>Counter App</h1>
      <h1>Welcome to the Counter App</h1>
      <h1>Counter APP</h1>
      <p>Click the button to increment the counter.</p>
      <button onClick={increment}>Increment</button>
      <p>Counter: {count}</p>
      <p>Click the button to reset the counter.</p>
      <button onClick={reset}>Reset</button>
    </div>
    <form className={"form"} onSubmit={handleSubmit}>
      <h2>Form Example</h2>
      <p>Fill out the form below:</p>
      <div className="username">
      <label>  Name: </label>
      {/* <input type="text" name="name" onChange={handleChange} /> */}
      <input type="text" name="name" id="name" ref={nameRef} />
      </div>
       <div className="email">
       <label> Email:</label>
       {/* <input type="email" name="email" onChange={handleChange} /> */}
        <input type="email" name="email" id="email" ref={emailRef} />
       </div>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
