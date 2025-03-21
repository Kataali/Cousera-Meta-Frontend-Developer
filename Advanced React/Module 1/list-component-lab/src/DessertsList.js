function DessertsList(props) {
  // Implement the component here.
  var newDeserts = props.data
    .filter(
    dessert => {
      return dessert.calories < 500;
    })
  .sort((a, b) =>{
    return a.calories - b.calores;
  })
  .map(
    dessert => {
      return (
      <li>
        {dessert.name} - {dessert.calories} cal
      </li>
      );
    }
  );
  return (<ul>
  {newDeserts}
  </ul>);
}

export default DessertsList;
