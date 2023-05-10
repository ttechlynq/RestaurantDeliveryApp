import React, { Fragment, useState } from "react";
import FoodOrder from "./FoodOrder";
import "./Foods.css";

export default function Foods(props) {
  const [selectedFood, setSelectedFood] = useState("");

  const handleSelect = (event) => {
    setSelectedFood(
      props.foodItems.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };
  return (
    <Fragment>
      {!selectedFood && (
        <Fragment>
          <h4 className="foodTitle">Make a Pick</h4>
          <ul className="ulFoods">
            {props.foodItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="liFoods"
                  data-id={item.id}
                  onClick={handleSelect}
                >
                  <img
                    className="foodImg"
                    src={require(`../images/${item.image}`)}
                    alt={item.name}
                  />
                  <div className="foodItem">
                    <p className="foodDesc">{item.desc}</p>
                    <p className="foodPrice">{item.price}$</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
      {selectedFood && (
        <FoodOrder
          food={selectedFood}
          returnToMenu={() => setSelectedFood("")}
          // updateQuantity={(id, quantity) =>
          //   props.updateMenuQuantity(id, quantity)
          // }
        />
      )}
    </Fragment>
  );
}
