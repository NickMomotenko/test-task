import { ReactSVG } from "react-svg";

interface IconProp {
  url: string | any;
}

const Icon: React.FC<IconProp> = ({ url }) => {
  return <ReactSVG src={url} wrapper="span" className="icon" />;
};

export default Icon;
