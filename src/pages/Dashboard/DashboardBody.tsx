import { useState } from "react";

import Input from "../../components/Input";
import { Button } from "../../components/Button";

import searchIcon from "../../assets/icons/search.svg";

import { currencyData } from "../../mock/data";

import Icon from "../../components/Icon";

import backIcon from "../../assets/icons/back.svg";

interface DashboardBodyProps {}

export const DashboardBody: React.FC<DashboardBodyProps> = () => {
  const [activeCurrency, setActiveCurrency] = useState(currencyData[0]);

  return (
    <>
      <div className="dashboard__head">
        <div className="dashboard__head-btn">
          <Icon url={backIcon} />
        </div>
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
    </>
  );
};
