interface TitleProp {
  text: string | any;
}

export const Title: React.FC<TitleProp> = ({ text }) => {
  return <h2 className="title">{text}</h2>;
};
