
//Potentially rename and clean up

import React from "react";

class Ingredients extends React.Component {
    
    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div classname="ingredient-info">
                {
                    this.props.drinks && <p className="drink__key">
                        <span className="drink__key"> {this.props.drinks}</span>
                    </p>
                }
            </div>
        )
    }        
    
}
export default Ingredients;