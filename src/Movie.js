import React from "react";
import PropTypes from "prop-types";
import "./css/import.css";

function Movie({id, year, title, summary, poster}){
    return (
        <div class="movies-movie">
            <img src={poster} alt={title} title={title}></img>
            <h3>{title}</h3>
            <h5>{summary}</h5>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
}

export default Movie;