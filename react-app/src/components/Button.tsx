import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  type?: "btn-close" | "btn btn-primary";
  setOnClick: () => void;
}

const Button = ({
  children = " ",
  type = "btn btn-primary",
  setOnClick,
}: Props) => {
  return (
    <div
      className={type}
      onClick={() => {
        setOnClick();
      }}
    >
      {children}
    </div>
  );
};

export default Button;
