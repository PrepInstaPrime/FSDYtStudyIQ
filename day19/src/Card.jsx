import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
export default function Card() {
    let [data, setData] = useState([]);
    // object for path param example 
    let { country } = useParams();
    let obj={
        india:{
            capital:"delhi",
            population:"1.4 billion",
            language:"hindi",
            currency:"rupee",
            flag:"https://flagcdn.com/w320/in.png",
            continent:"asia"
        },
        usa:{
            capital:"washington",
            population:"331 million",
            language:"english",
            currency:"usd",
            flag:"https://flagcdn.com/w320/us.png",
            continent:"north america"
        },
        china:{
            capital:"beijing",
            population:"1.4 billion",
            language:"mandarin",
            currency:"renminbi",
            flag:"https://flagcdn.com/w320/cn.png",
            continent:"asia"
        }
    }
    // fetch data
    // async function fetchData() {
    //     try {
    //         let res = await fetch("https://dummyjson.com/products");
    //         let data = await res.json();
    //         setData(data.products);
    //         console.log(data.products);
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div>
            {/* {data.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}  */}
            <h1>Country {country}</h1>
            <h2>Capital: {obj[country]?.capital}</h2>
            <h2>Population: {obj[country]?.population}</h2>
            <h2>Language: {obj[country]?.language}</h2>
            <h2>Currency: {obj[country]?.currency}</h2>
            <img src={obj[country]?.flag} alt={`Flag of ${country}`} />
            <h2>Continent: {obj[country]?.continent}</h2>

        </div>
    )
}
