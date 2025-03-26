import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

interface TabItem {
  [key: string]: any; // Flexible object structure
  title?: string;
  key?: string;
}

interface AppTabsProps {
  tabPosition?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  activeKey?: string;
  onChange?: (activeKey: string) => void;
  defaultActiveKey?: string;
  list?: TabItem[];
  itemFields?: {
    title: string;
    key: string;
  };
}

const AppTabs: React.FC<AppTabsProps> = ({
  tabPosition = "top",
  className = "",
  activeKey,
  onChange,
  defaultActiveKey,
  list = [],
  itemFields = { title: "title", key: "key" },
}) => {
  return (
    <Tabs
      tabPosition={tabPosition}
      className={className}
      activeKey={activeKey}
      onChange={onChange}  // Changed from onTabClick to onChange for consistency with AntD API
      defaultActiveKey={defaultActiveKey}
      destroyInactiveTabPane={true}
    >
      {list.map((tab) => (
        <TabPane
          tab={tab[itemFields.title]}
          key={tab[itemFields.key]}
        >
          {tab.children}  {/* Added children rendering for tab content */}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default AppTabs;