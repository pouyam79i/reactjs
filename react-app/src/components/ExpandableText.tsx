import { useState } from "react";

interface props {
  children?: string;
  maxChar?: number;
}

const ExpandableText = ({ children = "", maxChar = 100 }: props) => {
  if (maxChar < 0) maxChar = 0;
  const [maxShow, setMaxShow] = useState(
    children.length > maxChar ? maxChar : children.length
  );
  const [btnText, setBtnText] = useState(
    children.length > maxChar ? "More" : "Not Expandable"
  );

  return (
    <div>
      <p>
        {children.slice(0, maxShow)}
        {maxShow === maxChar && maxShow < children.length ? "..." : ""}
      </p>
      <button
        onClick={() => {
          if (btnText === "Not Expandable") return;
          if (maxShow === maxChar) {
            setMaxShow(children.length);
            setBtnText("Less");
          } else {
            setMaxShow(maxChar);
            setBtnText("More");
          }
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ExpandableText;
