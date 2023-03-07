import { Title } from "../../components/Title";
import { List } from "../../components/List";
import { Item } from "../../components/Item";
import Icon from "../../components/Icon";

import { menuData } from "../../mock/data";

interface DashboardSidebarProps {}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = () => {
  const profileData = menuData.find((item) => item.title === "Profile");
  const servicesData = menuData.find((item) => item.title === "Services");

  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebar-block">
        <Title text={profileData?.title} />
        <List>
          {profileData?.categories?.map(({ id, title, icon }) => {
            return (
              <Item key={id} modClass="dash">
                <div className="item__title">{title}</div>
                <div className="item__icon">
                  <Icon url={icon} />
                </div>
              </Item>
            );
          })}
        </List>
      </div>
      <div className="dashboard__sidebar-block">
        <Title text={servicesData?.title} />
        <List>
          {servicesData?.categories?.map(({ id, title, icon }) => {
            return (
              <Item key={id} modClass="dash">
                <div className="item__title">{title}</div>
                <div className="item__icon">
                  <Icon url={icon} />
                </div>
              </Item>
            );
          })}
        </List>
      </div>
    </div>
  );
};
