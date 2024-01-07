import styles from "./Button.module.css";

interface Props {
  children?: string;
  color?: "primary" | "secondary";
  setOnClick?: (item: string) => void;
}

const Button = ({
  children = "Click Me!",
  color = "primary",
  setOnClick = (item) => {
    console.log("Clicked!");
  },
}: Props) => {
  return (
    <div
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={() => {
        setOnClick(children);
      }}
    >
      {children}
    </div>
  );
};

export default Button;
