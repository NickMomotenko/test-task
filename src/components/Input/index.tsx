interface InputProps {
  placeholder: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, icon }) => {
  return (
    <div className="input">
      {icon && <img src={icon} className="input__icon" />}
      <input
        value=""
        onChange={() => {}}
        placeholder={placeholder}
        className="input__body"
      />
    </div>
  );
};

export default Input;
