import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "../css/import.css";

function Movie({id, title, year, summary, poster, genres}){
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movies-movie">
                <img src={poster} alt={title} title={title}></img>
                <h3>{title}</h3>
                <h5>{year}</h5>
                <ul>{genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}</ul>
                <p>{summary.slice(0, 120)}...</p>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;