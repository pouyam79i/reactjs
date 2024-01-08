import styles from "./Button.module.css";

interface Props {
  children?: string;
  color?: "primary" | "secondary";
  setOnClick?: () => void;
}

const Button = ({
  children = "Click Me!",
  color = "primary",
  setOnClick = () => {
    console.log("Clicked!");
  },
}: Props) => {
  return (
    <div
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={() => {
        setOnClick();
      }}
    >
      {children}
    </div>
  );
};

export default Button;
