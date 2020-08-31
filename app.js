// TODO

//Create a GroceryList component that contains an unordered list of 2 grocery items
var GroceryList = () => (
  <div>
    <ul>
      <Fruit />
      <Spices />
    </ul>
  </div>
);

//Create React components for the 2 items in your grocery list. Create a Fruit component and a Spices component
var Fruit = () => (
  <li>Fruit</li>
);

//Note: had a helpdesk ticket because I used {} instead of (). Note bracket usage on arrow functions means I need to use a return statement, whereas with () the return is auto generated.


var Spices = () => (
  <li>Spices</li>
);

//Render this component to the div tag inside index.html with an id of app
ReactDOM.render(<GroceryList />, document.getElementById('app'));