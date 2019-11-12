import React from "react";

class Ingredients extends React.Component {
    
    render() {
        return (
            <div classname="ingredient-info">
                {
                    this.props.ingredientName && <p className="ingredient__key">
                        <span className="ingredient__key"> {this.props.ingredientName}</span>
                    </p>
                }
            </div>
        )
    }        
    
}
export default Ingredients;