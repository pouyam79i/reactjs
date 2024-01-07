import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface Props {
  comment?: string;
  onClick?: (item: string) => void;
}

const Like = ({ comment = "", onClick = (item: string) => {} }: Props) => {
  const [isLikeEnabled, setIsLikeEnabled] = useState(false);

  const toggle = () => {
    setIsLikeEnabled(!isLikeEnabled);
    onClick(comment);
  };

  return isLikeEnabled ? (
    <IoHeartSharp size="40" color="red" onClick={toggle} />
  ) : (
    <IoHeartOutline size="40" onClick={toggle} />
  );
};

export default Like;
