interface SelectProps {
  title: string;
}

export const Select: React.FC<SelectProps> = ({ title }) => {
  return (
    <div className="select-block">
      <div className="select-block__title">{title}</div>
    </div>
  );
};
