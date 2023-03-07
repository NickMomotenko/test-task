import { historyItem } from ".";
import { Button } from "../../components/ui/Button";

import Icon from "../../components/ui/Icon";
import { RowInfo } from "../../components/shared/RowInfo";
import { getIconUrl } from "./helpers";

import copyIcon from "../../assets/icons/copy.svg";
import arrowIcon from "../../assets/icons/arrow-right.svg";
import { CurrencyFromTo } from "../../components/common/CurrencyFromTo";

interface HistoryBodyProps {
  item: historyItem | any;
}

export const HistoryBody: React.FC<HistoryBodyProps> = ({ item }) => {
  const {
    amount,
    created_at,
    operation_currency,
    operation_network,
    operation_id,
  } = item;

  return (
    <>
      <div className="history__paper paper">
        <div className="history__operation-status">
          <Icon url={getIconUrl(item.type)} />
        </div>
        <div className="history__body">
          <div className="history__row">
            <RowInfo title="Exchange">
              <CurrencyFromTo
                from={operation_currency.from}
                to={operation_currency.to}
                url={arrowIcon}
                modClass="white"
              />
            </RowInfo>
            <RowInfo title="To amount" modClass="amount">
              {amount.to}
            </RowInfo>
            <RowInfo title="From amount" modClass="amount-from">
              {amount.from}
            </RowInfo>
            <RowInfo title="Network fee">{operation_network}</RowInfo>
            <RowInfo title="Transaction time">{`${created_at.day}, ${created_at.time}`}</RowInfo>
            <RowInfo title="Exchanged id" modClass="copy">
              {operation_id}
              <span className="row-info__icon row-info__icon--copy">
                <Icon url={copyIcon} />
              </span>
            </RowInfo>
          </div>
        </div>
        <div className="history__button">
          <Button text="Contact support" modClass="support" />
        </div>
      </div>
    </>
  );
};
