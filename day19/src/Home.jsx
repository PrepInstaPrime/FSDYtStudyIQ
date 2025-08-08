import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  // useLocation to get the current URL and query parameters
  // This is useful for handling sorting or filtering based on URL parameters
  const location = useLocation();
    // Example: Extracting a query parameter named 'sort'
  let search = new URLSearchParams(location.search);
    // Get the 'sort' parameter from the URL
  let sort = search.get("sort");
  let order = search.get("order");
  console.log("Order parameter:", order);
    // Log the sort parameter to the console for debugging
  console.log("Sort parameter:", sort);
  const handleButtonClick = (country) => {
    navigate(`/${country}`);
  };
  let countries = ["india", "usa", "china"];
    // Function to sort countries based on the selected order

    // This function updates the URL with the sort order
    // It uses the navigate function from react-router-dom to change the URL
    // and trigger a re-render of the component
    // This function is called when the user clicks on the sort buttons
    if(sort==="asc"){
    countries.sort((a, b) => a.localeCompare(b));  
    } 
    else if(sort==="desc"){
    countries.sort((a, b) => b.localeCompare(a));
    }
  function sortCountries(order){
    if(order==='A-Z'){
        navigate(`/?sort=asc&order=A-Z`);
    }else if(order==='Z-A'){
        navigate(`/?sort=desc&order=Z-A`);
    }

  }
  return (
    <div>
      <h1>Welcome to the Country Info App</h1>
      <p>Select a country to see its details.</p>
      {/* buttons to sort countries */}
      <button onClick={() => sortCountries('A-Z')}>A-Z</button>
      <button onClick={() => sortCountries('Z-A')}>Z-A</button>
      {/* list of countries */}
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <button onClick={() => handleButtonClick(country)}>
              {country.charAt(0).toUpperCase() + country.slice(1)}
            </button>
          </li>
        ))}
      </ul>

        <ul>
          <li><a href="/india">India</a></li>
          <li><a href="/usa">USA</a></li>
          <li><a href="/china">China</a></li>
        </ul>   
        <p>Use the links above to navigate to different country details.</p>
       
    </div>
  )
}
