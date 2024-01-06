// Use Pascal Casing
function Message() {
  let name = "Pouya";
  // This is not HTML. it is JSX (javascript xml)
  let res = name == "" ? "World" : name;
  return <h1>Hello {res}</h1>;
}

export default Message;
