import "./fooditem.css";

function DrinkItem(props) {
  const purchase = () => {
    console.log("Added to the cart");
  };
  return (
    <div className="main-food-item">
      <div className="food-items">
        <strong>{props.drinkName}</strong>
      </div>
      <button className="food-items" onClick={purchase}>
        {props.drinkPrice}
      </button>
    </div>
  );
}
export default DrinkItem;
