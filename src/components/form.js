import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit = {this.props.loadCocktail}>
                <input type="text" name="searchIngredient" placeholder="Search ingredient by name"/>
                <button>Search for Alcohol</button>
            </form>
        )
    }
}