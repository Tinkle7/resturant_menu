import React, { Component } from "react";
import "./App.css";
import DrinkItem from "./components/Drinkitem";
import FoodItems from "./components/FoodItem";
import Orderform from "./components/OrderForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      drink: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    try {
      let foodresponce = await fetch("http://localhost:5000");
      let foodData = await foodresponce.json();

      let drinkresponce = await fetch("http://localhost:5000");
      let drinkData = await drinkresponce.json();

      this.setState({
        food: foodData[0],
        drink: drinkData[0],
        isLoaded: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.state.isLoaded ? (
      <div className="App">
        <Orderform />
        <hr />
        <h1>Food Menu : </h1>
        {this.state.food.map((item) => (
          <FoodItems
            key={item.id}
            dishName={item.dishName}
            dishPrice={item.dishPrice}
            dishType={item.dishType}
          ></FoodItems>
        ))}
        <hr />
        <h1>Drinks Menu : </h1>
        {this.state.drink.map((item) => (
          <DrinkItem
            key={item.id}
            drinkName={item.drinkName}
            drinkPrice={item.drinkPrice}
          ></DrinkItem>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;

// const food = [
//       {
//         id:1,
//         dishType: 'Veg',
//         dishName: 'Panner Tikka',
//         dishPrice: 'INR 200'
//       },
//       {
//         id:2,
//         dishType: 'Veg',
//         dishName: 'Panner Tikka Masala',
//         dishPrice: 'INR 220'
//       },
//       {
//         id:3,
//         dishType: 'Non-veg',
//         dishName: 'Chicken Curry',
//         dishPrice: 'INR 300'
//       },
//       {
//         id:4,
//         dishType:'Veg',
//         dishName: 'Panner Bhurji',
//         dishPrice: 'INR 180'
//       },
//       {
//         id:5,
//         dishType:'Non-veg',
//         dishName: 'Egg Bhurji',
//         dishPrice: 'INR 180'
//       },
//       {
//         id:6,
//         dishType:'Veg',
//         dishName: 'Panner Masala',
//         dishPrice: 'INR 180'
//       }
// ]

// const drink = [
//       {
//         id:1,
//         drinkName: 'Tea',
//         drinkPrice: 'INR 100'
//       },
//       {
//         id:2,
//         drinkName: 'Coffee',
//         drinkPrice: 'INR 120'
//       },
// ]
