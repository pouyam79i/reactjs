import { ReactNode, useState } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary"; // Optional + Default Color Value
  setOnClick: (item: string) => "primary" | "secondary";
}

const Button = ({ children, color = "primary", setOnClick }: Props) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <div
      className={"btn btn-" + currentColor}
      onClick={() => {
        setCurrentColor(setOnClick(currentColor));
      }}
    >
      {children}
    </div>
  );
};

export default Button;
