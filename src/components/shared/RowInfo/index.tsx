interface RowInfoProps {
  title: string;
  children: React.ReactNode;
  modClass?: string;
}

export const RowInfo: React.FC<RowInfoProps> = ({
  title,
  modClass,
  children,
}) => {
  const stylesData = modClass
    ? `row-info row-info--${modClass}`
    : "row-info";

  return (
    <div className={stylesData}>
      <div className="row-info__title">{title}</div>
      <div className="row-info__data">{children}</div>
    </div>
  );
};
