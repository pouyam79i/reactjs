interface Props {
  itemNumbers?: number;
}

const NavBar = ({ itemNumbers = 0 }: Props) => {
  return <div>NavBar: {itemNumbers}</div>;
};

export default NavBar;
