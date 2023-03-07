import { Title } from "../../components/Title";
import { List } from "../../components/List";
import { Item } from "../../components/Item";
import Icon from "../../components/Icon";
import { Select } from "../../components/Select";

import { historyData, historySelectData } from "../../mock/data";

import { getIconUrl, getText } from "./helpers";

import arrowIcon from "../../assets/icons/arrow-right.svg";
import { CurrencyFromTo } from "../../components/CurrencyFromTo";

interface HistorySidebarProps {}

export const HistorySidebar: React.FC<HistorySidebarProps> = () => {
  return (
    <div className="history__sidebar dashboard__sidebar">
      <div className="dashboard__sidebar-block">
        <Title text="Transaction History" />
        <div className="history__select-block">
          {historySelectData?.map((item) => {
            return <Select key={item.id} {...item} />;
          })}
        </div>
        <div className="history__list">
          <List>
            {historyData?.map((item) => {
              const infoUnderTitle =
                getText(item.type) === "hash" ? (
                  item.operation_id
                ) : (
                  <div>
                    <CurrencyFromTo
                      from={item.operation_currency.from}
                      url={arrowIcon}
                      to={item.operation_currency.to}
                    />
                  </div>
                );

              const isPositive = item.amount.from.charAt(0) === "+";

              return (
                <Item key={item.id} modClass="history">
                  <div className="item__col item__col--row">
                    <div className="item__icon">
                      <Icon url={getIconUrl(item.type)} />
                    </div>
                    <div className="item__content">
                      <div className="item__type-title">{item.title}</div>
                      <div className="item__text">{infoUnderTitle}</div>
                    </div>
                  </div>
                  <div className="item__col item__col--right">
                    <div
                      className={
                        isPositive
                          ? "item__value item__value--pos"
                          : "item__value"
                      }
                    >
                      {item.amount.from}
                    </div>
                    <div className="item__time">{item.created_at.time}</div>
                  </div>
                </Item>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};
