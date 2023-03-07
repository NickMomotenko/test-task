interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => (
  <ul className="list">{children}</ul>
);
