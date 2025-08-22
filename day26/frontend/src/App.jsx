import styles from "./App.module.css";
import { useState } from "react";
import axios from 'axios';
export default function App() {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [phone, setPhone]= useState("");
  const [age, setAge]= useState("");
  const handleChange=(e)=>{
      let name=e.target.name;
      let value= e.target.value;
      if(name=="user"){
        setName(value);
      }else if(name=="email"){
        setEmail(value);
      }else if(name=="pass"){
        setPassword(value);
      }else if(name=="phone"){
        setPhone(value);
      }else{
        setAge(value);
      }
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
      let payload={name,email,password,phone,age};
      let response = await axios.post("http://localhost:8080/registration",payload,{'Content-Type':"appliation/json"});
      console.log(response);
  }
  
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="user" id="name" className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.item}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email"  className={styles.input} onChange={handleChange}/>
        </div>
        <div className={styles.item}>
          <label htmlFor="pass">Password:</label>
          <input type="password" name="pass" id="pass" className={styles.input} onChange={handleChange}/>
        </div>
        <div className={styles.item}>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age"className={styles.input}onChange={handleChange} />
        </div>
        <div className={styles.item}>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" id="phone" className={styles.input} onChange={handleChange} />
        </div>

        <button className={styles.btn}>submit</button>
      </form>
    </div>
  );
}
