import { useState } from "react";
import styles from "./ListGroup.module.css";

// using interface to pass parameters
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// a good way to handle interface or objects as input to the function
function ListGroup({ items, heading, onSelectItem }: Props) {
  // use hook (useState) to tell react components can have dynamic data
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className={styles.ListGroup}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? [styles.listGroupItem, styles.activate].join(" ")
                : styles.listGroupItem
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
