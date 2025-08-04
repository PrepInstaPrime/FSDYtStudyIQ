import React from 'react'
import Navigation from '../component/nav/Navigation'
import Card from '../component/card/Card'
import styles from './Home.module.css'
export default function Home() {
    // Sample data for the Card component
    const sampleData=[
        { name: "John Doe", email: "john.doe@example.com" , review: "This is a great product!", rating: 5 },
        { name: "Jane Smith", email: "jane.smith@example.com", review: "I love this!", rating: 4 },
        { name: "Alice Johnson", email: "alice.johnson@example.com", review: "Fantastic experience!", rating: 5 },
        { name: "Bob Brown", email: "bob.brown@example.com", review: "Highly recommend!", rating: 4 },
        { name: "Charlie White", email: "charlie.white@example.com", review: "Excellent service!", rating: 5 },
        { name: "Diana Green", email: "diana.green@example.com", review: "", rating: 0 } ,
        { name: "Ethan Blue", email: "ethan.blue@example.com", review: "Great value for money!", rating: 4 }  

    ]
  return (
    <div>
       <Navigation/>
      <h1 className={styles.title}>Welcome to My App</h1>
      {/* <Card data={{ name: "John Doe", email: "john.doe@example.com", review: "This is a great product!", rating: 5 }} /> */}
      <div className={styles.customers}>
      {sampleData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
      </div>
      <p>Explore our features and services.</p>
    </div>
  )
}
