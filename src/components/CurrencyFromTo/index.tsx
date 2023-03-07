import React from "react";
import Icon from "../Icon";

interface CurrencyFromToProps {
  from?: string;
  to?: string;
  url?: string;
  modClass?: string;
}

export const CurrencyFromTo: React.FC<CurrencyFromToProps> = ({
  from,
  to,
  url,
  modClass
}) => {
  const styleClass = modClass ? `currency currency--${modClass}` : "currency";

  return (
    <div className={styleClass}>
      <div className="currency__from">{from}</div>
      <div className="currency__icon">
        <Icon url={url} />
      </div>
      <div className="currency__to">{to}</div>
    </div>
  );
};
