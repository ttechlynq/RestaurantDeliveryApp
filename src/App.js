// import logo from './logo.svg';
import "./App.css";
import React, { useState, Fragment } from "react";
import Foods from "./components/Foods";
export const foodItemsContext = React.createContext();
function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Gulash s Knedlikem",
      quantity: 12,
      desc: "Dumpling and Beef - Onions, pepper, tomatoes",
      price: "120",
      image: "gulash.png",
    },
    {
      id: 2,
      name: "Rice and Chicken",
      quantity: 29,
      desc: "White rice and Stew - Tomatoes, onions, spices",
      price: "99",
      image: "rice.png",
    },
    {
      id: 3,
      name: "Vegetarian Burger",
      quantity: 76,
      desc: "Veggie meat, onions, veggie cheese, olive oil",
      price: "312",
      image: "burger.png",
    },
    {
      id: 4,
      name: "Ceaser Salad",
      quantity: 76,
      desc: "Salad, really huge salad, tomatoes, cheese, onions",
      price: "287",
      image: "salad.png",
    },
    {
      id: 5,
      name: "Wine Wine Wine Wine",
      quantity: 76,
      desc: "Red wine, Pink wine, White wine, etc",
      price: "432",
      image: "wine.png",
    },
  ]);

  // const updateMenuQuantity = (id, orderQuantity) => {
  //   const updateMenuItems = menuItems.map((item) => {
  //     if (item.id === id)
  //       return {
  //         ...item,
  //         quantity: item.quantity - orderQuantity,
  //       };
  //     return item;
  //   });
  //   setMenuItems(updateMenuItems);
  // };

  return (
    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        <button
          className="toggleButton"
          onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
        >
          {isChooseFoodPage ? "Check Availability" : "Order Food"}
        </button>
        <h1 className="title">Nature's Food</h1>
        {!isChooseFoodPage && (
          <Fragment>
            <h3 className="subTitle">Food Availability</h3>
            <ul className="ulApp">
              {menuItems.map((item) => {
                return (
                  <li key={item.id} className="liApp">
                    {item.name} - {item.quantity}
                  </li>
                );
              })}
            </ul>
          </Fragment>
        )}
        {/* {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>} */}
        {isChooseFoodPage && (
          <Foods
            foodItems={menuItems}
            // updateMenuQuantity={updateMenuQuantity}
          ></Foods>
        )}
      </div>
    </foodItemsContext.Provider>
  );
}

export default App;
