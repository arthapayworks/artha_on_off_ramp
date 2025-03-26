import React from 'react';

interface CollapseItemProps {
  fee: number | string;
  netAmount: number | string;
  totalAmount: number | string;
}

const CollapseItem: React.FC<CollapseItemProps> = ({ 
  fee, 
  netAmount, 
  totalAmount 
}) => (
  <div className="space-y-3.5">
    <div className="flex items-center justify-between">
      <p className="text-paraColor text-sm font-normal">Fee</p>
      <h5 className="text-subTextColor text-sm font-semibold">{fee} USD</h5>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-paraColor text-sm font-normal">Net Amount</p>
      <h5 className="text-subTextColor text-sm font-semibold">{netAmount} USD</h5>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-paraColor text-sm font-normal">Total Amount</p>
      <h5 className="text-subTextColor text-sm font-semibold">{totalAmount} USD</h5>
    </div>
  </div>
);

export default CollapseItem;