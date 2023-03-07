import BaseTemplate from "../../components/common/BaseTemplate";

import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardBody } from "./DashboardBody";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard">
      <BaseTemplate sidebar={<DashboardSidebar />} body={<DashboardBody />} />
    </div>
  );
};
