import React from "react";

function Modifier(props){
    return(
        <div>
            <p>Modifier: { props.modifier }</p>
        </div>
    )
}

Modifier.defaultProps = {
    modifier: 0
}

export default Modifier;