import Icon from "../Icon";

import trianIcon from "../../../assets/icons/triangle.svg";

interface SelectProps {
  title: string;
}

export const Select: React.FC<SelectProps> = ({ title }) => {
  return (
    <div className="select-block">
      <div className="select-block__title">{title}</div>
      <div className="select-block__icon">
        <Icon url={trianIcon} />
      </div>
    </div>
  );
};
