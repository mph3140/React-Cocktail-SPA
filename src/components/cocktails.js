import React from "react";

class Cocktail extends React.Component {
    
    render() {
        return (
            <div classname="cocktail-info">
                {
                    this.props.drink
                }
            </div>
        )
    }        
    
}
export default Cocktail;