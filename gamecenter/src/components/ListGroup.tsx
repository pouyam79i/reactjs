import { useState } from "react";

// using interface to pass parameters
interface Props {
  items: string[];
  heading: string;
}

// a good way to handle interface or objects as input to the function
function ListGroup({ items, heading }: Props) {
  // use hook (useState) to tell react components can have dynamic data
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
