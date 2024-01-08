import styled from "styled-components";

// use this kind of styling if you want to have all css related codes with your main component code (only one .tsx file)
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px;
  color: white;
  background-color: black;
`;

// using interface to pass parameters
interface Props {
  items?: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}

// a good way to handle interface or objects as input to the function
function ListGroup({
  items = [],
  heading = "Items:",
  onSelectItem = (item: string) => {},
}: Props) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            onClick={() => {
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
