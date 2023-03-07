interface ItemProps {
  children?: React.ReactNode | any;
  modClass?: string;
}

export const Item: React.FC<ItemProps> = ({ children, modClass }) => {
  const classStyles = modClass ? `item item--${modClass}` : "item";

  return <li className={classStyles}>{children}</li>;
};
