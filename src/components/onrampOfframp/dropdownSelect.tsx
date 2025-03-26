import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import type { MenuProps } from 'antd';

interface DropdownItem {
  key: string;
  name: string;
  value: string;
  icon: string;
}

interface DropdownSelectProps {
  items: DropdownItem[];
  selectedItem: DropdownItem;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ 
  items, 
  selectedItem, 
  onClick 
}) => {
  const menuItems: MenuProps['items'] = items.map((item) => ({
    key: item.key,
    label: (
      <div className="flex items-center gap-2">
        <img 
          className="inline-block h-4 w-4 rounded-full" 
          src={item.icon} 
          alt={item.name} 
        />
        <div>
          <h5 className="text-base text-subTextColor font-semibold">
            {item.name}
          </h5>
          <p className="text-xs font-normal text-subTextColor">
            {item.value}
          </p>
        </div>
      </div>
    ),
  }));

  return (
    <Dropdown
      className="db-dropdownlist"
      menu={{ items: menuItems }}
      trigger={['click']}
    >
      <a onClick={onClick}>
        <Space>
          <img 
            className="inline-block min-h-7 min-w-7 max-h-7 max-w-7 rounded-full" 
            src={selectedItem.icon} 
            alt={selectedItem.name} 
          />
          <div>
            <h5 className="text-base text-subTextColor font-semibold">
              {selectedItem.name}
            </h5>
            <p className="text-xs font-normal text-subTextColor">
              {selectedItem.value}
            </p>
          </div>
          <button className="relative">
            <span className="icon menu-expandicon ml-2 cursor-pointer rotate-90"></span>
          </button>
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownSelect;