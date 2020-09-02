// TODO

//Create a GroceryList component that contains an unordered list of 2 grocery items
var GroceryList = (props) => (

    <ul>
      {props.GroceryList.map(groceryItems =>
        <GroceryListItem groceryItems={groceryItems}/>
      )}
    </ul>
);
//Note: had a helpdesk ticket because I used {} instead of (). Note bracket usage on arrow functions means I need to use a return statement, whereas with () the return is auto generated.

//Create React components for the 2 items in your grocery list. Create a Fruit component and a Spices component
var Fruit = () => (
  <li onClick={onListItemClick}>Fruit</li>
);

var Spices = () => (
  <li>Spices</li>
);


// Create a reusable GroceryListItem component that dynamically renders a given grocery item
//Refactor GroceryList to dynamically render an array of groceryITems, utilizing your new GrocerList item component
// var GroceryListItem = (props) => (
//   <li>{props.groceryItems[2]}</li>
// );

// Refactor GroceryListItem to be a class component
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>{this.props.groceryItems}</ul>
    );
  }
}


//Create event handling component
var onListItemClick = (event) => {
  console.log('I got clicked');
};




//Render this component to the div tag inside index.html with an id of app
ReactDOM.render(<GroceryList groceryList={['Nuts', 'Bananas', 'Oil']}/>, document.getElementById('app'));