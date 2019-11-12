import React from 'react';
import Form from "./components/form"
import Titles from "./components/titles"
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';

const axios = require('axios')

class App extends React.Component {
  
  state = {
    searchIngredient: undefined
  }

  getIngredients = async (e) => {

    const options = {
      "method":"GET",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":"4769e24f8fmshe32fdfc0bcb4eb9p180b95jsnf3e30198cfff"
      },"params":{
      "a":"list"
      }    
    };

    return await axios.get('https://the-cocktail-db.p.rapidapi.com/list.php', options)
      .then((response)=>{
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }


  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    )
  }
}
export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;