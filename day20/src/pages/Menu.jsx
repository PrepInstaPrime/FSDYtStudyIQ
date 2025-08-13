import React from 'react'
import Navigation from '../components/Navigation'
import styles from './Menu.module.css'

const menuItems = [
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 8.99, rating: 4.6, emoji: '🍕', desc: 'San Marzano tomato, mozzarella, basil.' },
  { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 10.49, rating: 4.7, emoji: '🍕', desc: 'Loaded with pepperoni and mozzarella.' },
  { id: 3, name: 'Veggie Supreme', category: 'Pizza', price: 9.99, rating: 4.4, emoji: '🍕', desc: 'Peppers, olives, onions, mushrooms.' },
  { id: 4, name: 'Smash Burger', category: 'Burger', price: 7.99, rating: 4.5, emoji: '🍔', desc: 'Double patty, cheddar, secret sauce.' },
  { id: 5, name: 'Chicken Burger', category: 'Burger', price: 7.49, rating: 4.3, emoji: '🍔', desc: 'Crispy chicken, lettuce, mayo.' },
  { id: 6, name: 'Falafel Wrap', category: 'Wraps', price: 6.99, rating: 4.2, emoji: '🌯', desc: 'Herbed falafel, tahini, fresh salad.' },
  { id: 7, name: 'Chicken Shawarma', category: 'Wraps', price: 7.49, rating: 4.5, emoji: '🌯', desc: 'Rotisserie chicken, garlic sauce.' },
  { id: 8, name: 'Caesar Salad', category: 'Salad', price: 6.49, rating: 4.1, emoji: '🥗', desc: 'Crisp romaine, croutons, parmesan.' },
  { id: 9, name: 'Greek Salad', category: 'Salad', price: 6.49, rating: 4.2, emoji: '🥗', desc: 'Feta, olives, cucumber, tomato.' },
  { id: 10, name: 'Penne Arrabbiata', category: 'Pasta', price: 8.49, rating: 4.3, emoji: '🍝', desc: 'Spicy tomato, garlic, chili flakes.' },
  { id: 11, name: 'Fettuccine Alfredo', category: 'Pasta', price: 9.49, rating: 4.4, emoji: '🍝', desc: 'Creamy parmesan sauce.' },
  { id: 12, name: 'Salmon Nigiri', category: 'Sushi', price: 11.99, rating: 4.6, emoji: '🍣', desc: 'Fresh-cut salmon over rice.' },
  { id: 13, name: 'California Roll', category: 'Sushi', price: 9.99, rating: 4.4, emoji: '🍣', desc: 'Crab, avocado, cucumber.' },
  { id: 14, name: 'Street Tacos', category: 'Mexican', price: 8.99, rating: 4.5, emoji: '🌮', desc: 'Carnitas, cilantro, onion.' },
  { id: 15, name: 'Burrito Bowl', category: 'Mexican', price: 9.49, rating: 4.3, emoji: '🌯', desc: 'Rice, beans, salsa, guac.' },
  { id: 16, name: 'Butter Chicken', category: 'Indian', price: 10.99, rating: 4.7, emoji: '🍛', desc: 'Creamy tomato gravy, naan.' },
  { id: 17, name: 'Paneer Tikka', category: 'Indian', price: 9.49, rating: 4.4, emoji: '🍢', desc: 'Spiced cottage cheese skewers.' },
  { id: 18, name: 'Pad Thai', category: 'Thai', price: 10.49, rating: 4.5, emoji: '🍜', desc: 'Rice noodles, tamarind sauce.' },
  { id: 19, name: 'Tom Yum Soup', category: 'Thai', price: 7.49, rating: 4.2, emoji: '🥣', desc: 'Hot and sour, lemongrass broth.' },
  { id: 20, name: 'Chocolate Brownie', category: 'Dessert', price: 4.99, rating: 4.8, emoji: '🍫', desc: 'Rich, fudgy, and gooey.' },
]

export default function Menu() {
  return (
    <div className={styles.page}>
      <Navigation />

      <header className={styles.header}>
        <h1>Our Menu</h1>
        <p>Explore customer favorites across cuisines. Fresh, flavorful, and ready fast.</p>
      </header>

      <div className={styles.grid}>
        {menuItems.map(item => (
          <div className={styles.card} key={item.id}>
            <div className={styles.art} aria-hidden>{item.emoji}</div>
            <div className={styles.info}>
              <div className={styles.topRow}>
                <h3>{item.name}</h3>
                <span className={styles.price}>${item.price.toFixed(2)}</span>
              </div>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.meta}>
                <span className={styles.chip}>{item.category}</span>
                <span>⭐ {item.rating}</span>
              </div>
              <button className={styles.addBtn}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

