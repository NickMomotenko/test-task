import homeIcon from "../../../assets/icons/home.svg";
import walletIcon from "../../../assets/icons/wallet.svg";
import buyIcon from "../../../assets/icons/buy.svg";
import exchangeIcon from "../../../assets/icons/ex.svg";
import dashboardIcon from "../../../assets/icons/dashboard.svg";
import historyIcon from "../../../assets/icons/history.svg";
import { useState } from "react";
import Icon from "../../ui/Icon";

import { Link } from "react-router-dom";

const list = [
  { id: 1, icon: homeIcon, title: "Home", path: "/" },
  { id: 2, icon: walletIcon, title: "Wallet", path: "/wallet" },
  { id: 3, icon: buyIcon, title: "Buy", path: "/buy" },
  { id: 4, icon: exchangeIcon, title: "Exchange", path: "/exchange" },
  { id: 5, icon: historyIcon, title: "Dashboard", path: "/dashboard" },
  { id: 6, icon: dashboardIcon, title: "History", path: "/history" },
];

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = useState(list[4]);

  const onClick = (id: number) => {
    const searchableItem = list.find((item) => item.id === id);

    if (searchableItem) {
      setActiveItem(searchableItem);
    }
  };

  return (
    <nav className="menu">
      <ul className="menu__list">
        {list.map(({ id, icon, path }) => {
          return (
            <li
              key={id}
              className={
                activeItem?.id === id
                  ? "menu__item menu__item--active"
                  : "menu__item"
              }
              onClick={() => onClick(id)}
            >
              <Link to={path} className="menu__button">
                <Icon url={icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
