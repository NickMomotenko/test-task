import homeIcon from "../../assets/icons/home.svg";
import walletIcon from "../../assets/icons/wallet.svg";
import buyIcon from "../../assets/icons/buy.svg";
import exchangeIcon from "../../assets/icons/exchange.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import historyIcon from "../../assets/icons/history.svg";
import { useState } from "react";

const list = [
  { id: 1, icon: homeIcon, title: "Home", path: "/home" },
  { id: 2, icon: walletIcon, title: "Wallet", path: "/wallet" },
  { id: 3, icon: buyIcon, title: "Buy", path: "/buy" },
  { id: 4, icon: exchangeIcon, title: "Exchange", path: "/exchange" },
  { id: 5, icon: historyIcon, title: "Dashboard", path: "/dashboard" },
  { id: 6, icon: dashboardIcon, title: "History", path: "/history" },
];

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = useState(list[0]);

  return (
    <nav className="menu">
      <ul className="menu__list">
        {list.map(({ id, icon, path, title }) => {
          return (
            <li key={id} className="menu__item">
              <button className="menu__button">
                <img src={icon} alt={`${title} icon`} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
