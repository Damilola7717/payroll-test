import React from "react";
import { formatNo } from "../utils/formatCurrency";

const OverviewCard = ({ title, total, currency }) => {
  return (
    <div>
      <p>{title}</p>
      {currency ? <p>&#8358;{formatNo(parseInt(total))}</p> : <p>{total}</p>}
    </div>
  );
};

export default OverviewCard;
