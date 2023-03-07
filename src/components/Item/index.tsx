interface ItemProps {
  children?: React.ReactNode | any;
}

export const Item:React.FC<ItemProps> = ({ children }) => {
  return <li className="item">{children}</li>;
};
