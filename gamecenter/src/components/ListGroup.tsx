function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    // This is another way to use Fragment from react lib
    <>
      <h1>List</h1>
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
