import React, { Fragment, useState } from "react";
import "./FoodOrder.css";
import { useContext } from "react";
import { foodItemsContext } from "../App";

export default function FoodOrder(props) {
  const selectedFood = props.food;
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(selectedFood.price);
  const [isOrdered, setIsOrdered] = useState(false);
  const menuItems = useContext(foodItemsContext);

  const handleQuantityChange = (event) => {
    setTotalAmount(selectedFood.price * event.target.value);
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    setIsOrdered(true);
    menuItems.map((item) => {
      if (item.id === selectedFood.id) {
        item.quantity = item.quantity - quantity;
      }
    });
    // props.updateQuantity(selectedFood.id, quantity);
  };

  // const handleClick = () => {
  //     setIsOrdered(true);
  //     menuItems.map((item) => {
  //         if (item.id === selectedFood.id){
  //             item.quantity = item.quantity - quantity;
  //         }
  //     })
  //   };

  return (
    <Fragment>
      <h4 className="selFoodTitle">{selectedFood.name}</h4>
      <img
        className="selFoodImg"
        src={require(`../images/${selectedFood.image}`)}
        alt={selectedFood.name}
      />
      <ul className="ulFoodDetails">
        <li>
          <p className="selFoodDesc">{selectedFood.desc}</p>
        </li>
        <li>
          <p className="selFoodPrice">{totalAmount}$</p>
        </li>
        <li className="selQuantity">
          <label>Quantity</label>
          <input
            type="number"
            defaultValue={1}
            className="quantity"
            min="1"
            max="10"
            onChange={handleQuantityChange}
          />
        </li>
        <li className="liDetails">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="inputFields"
            id="name"
            name="name"
            placeholder="Your name"
          />
        </li>
        <li>
          <label htmlFor="mobile"></label>
          <input
            type="text"
            className="inputFields"
            id="mobile"
            name="mobile"
            placeholder="Phone Number"
          />
        </li>
        <li>
          <button className="btn btnOrder" onClick={handleClick}>
            Make Order
          </button>
          <button className="btn btnReturnMenu" onClick={props.returnToMenu}>
            Return to Menu
          </button>
        </li>
        {isOrdered && (
          <li className="liMessage">
            <label>
              Order has been submitted. Look forward to receiving an SMS when
              meal is ready
            </label>
          </li>
        )}
      </ul>
    </Fragment>
  );
}
