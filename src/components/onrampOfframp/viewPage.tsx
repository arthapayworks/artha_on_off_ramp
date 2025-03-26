import React from "react";
import { Form, Input, Collapse } from "antd";
import type { CollapseProps } from "antd"
import CustomButton from "../shared/button";
import DropdownSelect from "./dropdownSelect";

interface PaymentFormProps {
  items: any;
  item: any;
  colapsitems: CollapseProps['items'];
  onChange: (key: string | string[]) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  items,
  item,
  colapsitems,
  onChange
}) => {
  return (
    <div className="flex items-center flex-col gap-3.5">
      <div className="w-full">
        <div className="bg-inputBg rounded-5 p-1.5 w-full">
          <Form className="basicinfo-form">
            <div className="flex items-center justify-between gap-2">
              <Form.Item
                className="mb-0 top-label-design"
                name="addressFirstName"
                label="You Pay"
                colon={false}
              >
                <Input
                  className="custom-input-field outline-0"
                  placeholder="You Pay"
                  type="input"
                  maxLength={100}
                />
              </Form.Item>
              <div className="vertical-line"></div>
              <div className="flex items-center space-x-2 justify-center">
                <DropdownSelect
                  items={items}
                  selectedItem={{
                    name: "USD",
                    value: "470",
                    icon: "https://devdottstoragespace.blob.core.windows.net/arthaimages/briton.svg",
                    key: "USD" // Added missing key property
                  }}
                  onClick={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </Form>
        </div>
        <div className="text-right mt-1.5">
          <button type="button" className="text-primaryColor">
            Max: 10,000
          </button>
        </div>
      </div>

      <span className="icon db-down-arrow"></span>

      <div className="bg-inputBg rounded-5 p-1.5 w-full">
        <Form className="basicinfo-form">
          <div className="flex items-center justify-between gap-2">
            <Form.Item
              className="mb-0 top-label-design"
              name="addressFirstName"
              label="You Pay"
              colon={false}
            >
              <Input
                className="custom-input-field outline-0"
                placeholder="You Pay"
                type="input"
                maxLength={100}
              />
            </Form.Item>
            <div className="vertical-line"></div>
            <div className="flex items-center space-x-2 justify-center">
              <DropdownSelect
                items={item}
                selectedItem={{
                  name: "BTC",
                  value: "",
                  icon: "https://devdottstoragespace.blob.core.windows.net/arthaimages/BTC.svg",
                  key: "BTC" // Added missing key property
                }}
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </Form>
      </div>

      <Collapse
        className="border-0 border-r-0 border-l-0 collapse-border w-full"
        items={colapsitems}
        defaultActiveKey={['1']}
        onChange={onChange}
      />

      <CustomButton type="primary" className="w-full !my-6">
        Buy
      </CustomButton>
    </div>
  );
};

export default PaymentForm;