import { useState } from "react";

interface props {
  children?: string;
  maxChar?: number;
}

const ExpandableText = ({ children = "", maxChar = 100 }: props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (maxChar < 1) maxChar = 1;
  if (children.length <= maxChar) return <p>{children}</p>;

  return (
    <>
      <p>{isExpanded ? children : children.substring(0, maxChar) + "..."}</p>
      <button
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
