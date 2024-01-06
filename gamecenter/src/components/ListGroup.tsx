function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //   using function is good for passing parameters but const is sufficient for this case
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No Item Found</p> : null;
  //   };

  return (
    // This is another way to use Fragment from react lib
    <>
      <h1>List</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          // use unique key for each item to interact with the item later
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
