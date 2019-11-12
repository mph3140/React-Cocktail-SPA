import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit = {this.props.loadIngredients}>
                <input type="text" name="searchIngredient" placeholder="Search ingredient by name"/>
                <button>Search for Alcohol</button>
            </form>
        )
    }
}
export default Form;