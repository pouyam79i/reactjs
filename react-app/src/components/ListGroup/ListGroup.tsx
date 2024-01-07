import { useState } from "react";
import styled from "styled-components";

// use this kind of styling if you want to have all css related codes with your main component code (only one .tsx file)

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 1;
  background: ${(props) => (props.active ? "blue" : "white")};
`;

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
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
