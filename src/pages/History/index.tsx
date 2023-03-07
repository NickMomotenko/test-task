import { useState } from "react";

import BaseTemplate from "../../components/BaseTemplate";
import { HistoryBody } from "../History/HistoryBody";
import { HistorySidebar } from "../History/HistorySidebar";

import { historyData } from "../../mock/data";

export interface historyItem {
  item: {
    id: number;
    type: string;
    title: string;
    created_at: {
      day: string;
      time: string;
    };
    operation_currency: {
      from: string;
      to: string;
    };
    operation_network: string;
    amount: {
      from: string;
      to: string;
    };
    operation_id: string;
  };
}

const History: React.FC = () => {
  const [activeItem, setActiveItem] = useState(historyData[1]);

  return (
    <div className="history dashboard">
      <BaseTemplate
        sidebar={<HistorySidebar />}
        body={<HistoryBody item={activeItem} />}
      />
    </div>
  );
};

export default History;
