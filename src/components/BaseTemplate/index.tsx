import Menu from "../Menu";

interface BaseTemplateProps {
  sidebar: React.ReactNode;
  body: React.ReactNode;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ sidebar, body }) => {
  return (
    <div className="app__content">
      <div className="app__sidebar">
        <div className="app__sidebar-body">{sidebar}</div>
        <div className="app__menu">
          <Menu />
        </div>
      </div>
      <div className="app__body">
        <div className="app__paper">{body}</div>
      </div>
    </div>
  );
};

export default BaseTemplate;
