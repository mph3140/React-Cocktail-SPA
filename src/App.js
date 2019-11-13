import React from "react";
import Form from "./components/form";
import Titles from "./components/titles";
import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const axios = require("axios");

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      drinks: []
    };
  }

  axCall() {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "4769e24f8fmshe32fdfc0bcb4eb9p180b95jsnf3e30198cfff"
      },
      params: {
        i: "list"
      }
    };

    var drinksTemp = [];

    return new Promise((resolve, reject) => {
      axios
        .get("https://the-cocktail-db.p.rapidapi.com/list.php", options)
        .then(response => {
          console.log(response);
          for (var i = 0; i < response.data.drinks.length; i++) {
            drinksTemp.push({
              drinkName: response.data.drinks[i].strIngredient1
            });
            resolve(this.setState({ drinks: drinksTemp, loading: false }));
          }
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

  componentDidMount() {
    this.axCall();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Liquors</h1>
        </div>
        <div>
          <RingLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={"#00e68a"}
            loading={this.state.loading}
          />
        </div>
        <div className="list">
          <ol>
            {this.state.drinks.map((drink, index) => {
              return <li key={index}>{drink.drinkName}</li>;
            })}
          </ol>
        </div>
      </div>
    );
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
