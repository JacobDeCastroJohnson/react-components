// TODO

//Create a GroceryList component that contains an unordered list of 2 grocery items
var GroceryList = () => (
  <div>
    <ul>
      <li>Fruit</li>
      <li>Spices</li>
    </ul>
  </div>
);

//Render this component to the div tag inside index.html with an id of app
ReactDOM.render(<GroceryList />, document.getElementById("app"));
