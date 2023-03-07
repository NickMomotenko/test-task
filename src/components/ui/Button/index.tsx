interface ButtonProps {
  text: string;
  modClass?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, modClass }) => {
  const stylesClass = modClass ? `button button--${modClass}` : " button";

  return <button className={stylesClass}>{text}</button>;
};
