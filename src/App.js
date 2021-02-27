import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    rating : 5
  },
  {
    id : 2,
    name : "kimbap",
    rating : 4.9
  },
  {
    id : 3,
    name : "donkas",
    rating : 4.7
  }
];

function Food({name, rating}){
  return(
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>방가방가햄토리</h1>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
