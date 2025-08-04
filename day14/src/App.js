import React from 'react'
import {Hero }from './Hero'
import CustomButton from './CustomButton'
import './App.css'
export default function App() {
  let styles={
    color:"red",
    backgroundColor:"yellow",
    padding:"1rem 3rem",
    margin:"10px",
    borderRadius:"10px",
    fontSize:"24px",
    fontWeight:"600"
  }
  let btn1={...styles};
  btn1.backgroundColor="white";
  btn1.border="2px solid lightblue"
  let login =true;
  return (
    <div>
      <Hero intro={"coming from home"} login={login} age={19} welcome={false}/>
      <br></br>
      {/* <Hero/>
      <Hero/>
      <Hero/> */}
      <CustomButton title={"Login"} styles={styles} />
      <CustomButton title={"SignUp"} styles={btn1} />
      <CustomButton  styles={btn1} />
      
    </div>
  )
}
