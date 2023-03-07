import Input from "../../components/Input";
import Menu from "../../components/Menu";
import { Title } from "../../components/Title";

import { menuData, currencyData } from "../../mock/data";

import searchIcon from "../../assets/icons/search.svg";
import backIcon from "../../assets/icons/back.svg";
import { Button } from "../../components/Button";
import { useState } from "react";
import Icon from "../../components/Icon";
import { Item } from "../../components/Item";
import { List } from "../../components/List";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const [activeCurrency, setActiveCurrency] = useState(currencyData[0]);

  const profileData = menuData.find((item) => item.title === "Profile");
  const servicesData = menuData.find((item) => item.title === "Services");

  return (
    <div className="dashboard">
      <div className="app__content">
        <div className="app__sidebar">
          <div className="app__sidebar-body">
            <div className="dashboard__content">
              <Title text={profileData?.title} />
              <List>
                {profileData?.categories?.map(({ id, title }) => {
                  return (
                    <Item key={id}>
                      <div className="item__title">{title}</div>
                      <div className="item__icon">
                        <Icon url="" />
                      </div>
                    </Item>
                  );
                })}
              </List>
              <Title text={servicesData?.title} />
              <List>
                {servicesData?.categories?.map(({ id, title }) => {
                  return (
                    <Item key={id}>
                      <div className="item__title">{title}</div>
                      <div className="item__icon">
                        <Icon url="" />
                      </div>
                    </Item>
                  );
                })}
              </List>
            </div>
          </div>
          <Menu />
        </div>
        <div className="app__body">
          <div className="dashboard__head">
            <Icon url={backIcon} />
            <div className="dashboard__head-title">Select local currency</div>
          </div>
          <div className="dashboard__paper paper">
            <div className="dashboard__input">
              <Input placeholder="Search..." icon={searchIcon} />
            </div>
            <div className="dashboard__select-list select-list">
              <ul className="select-list__body">
                {currencyData?.map(({ id, icon, currency, currencyName }) => {
                  return (
                    <li
                      className={
                        activeCurrency.id === id
                          ? "select-list__item select-list__item--active"
                          : "select-list__item"
                      }
                      key={id}
                    >
                      <div className="select-list__col">
                        <div className="select-list__icon">
                          <img
                            src={icon}
                            alt={`${currencyName} icon`}
                            className="select-list__pic"
                          />
                        </div>
                      </div>
                      <div className="select-list__col">
                        <div className="select-list__currency">{currency}</div>
                        <div className="select-list__currency-name">
                          {currencyName}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dashboard__button">
              <Button text="Save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
