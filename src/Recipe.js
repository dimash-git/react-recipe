import React from "react";
import style from "./recipe.module.css";

const Recipe = props => {
  return (
    <div className="col">
      <div className={style.recipe}>
        <h1>{props.title}</h1>
        <p>Calories: {props.cal}</p>
        <ol>
          {props.ingredients.map(item => (
            <li key={item.weight}>{item.text}</li>
          ))}
        </ol>
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
};

export default Recipe;
