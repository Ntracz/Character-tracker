import React from "react";
import PropTypes from 'prop-types';
import Modifier from "./Modifier";
import './Stat.css'

function Stat(props){
    let rating = 5.8;
    let generos = ['Acción', 'Drama'];
    return (
        <div className="stat">
         <h2 className="sarasa">{ props.title }</h2>
         <p>Rating: {rating} </p>
         <ul>
            { generos.map( genero => <li> { genero } </li> ) }
         </ul>
         <Modifier/>
        </div>
    )
}

Stat.propTypes = {
    rating: PropTypes.number,
    title: PropTypes.string
}

export default Stat;