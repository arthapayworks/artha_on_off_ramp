import React from "react";
import CollapseItem from './collapseItem';
import PaymentForm from "./viewPage";
import AppTabs from "../shared/appTabs";
import type { CollapseProps } from "antd";
interface TabItem {
    id: string;
    name: string;
}
interface CurrencyItem {
    key: string;
    name: string;
    value: string;
    icon: string;
}
const tabs: TabItem[] = [
    { id: "buy", name: "Buy" },
    { id: "sell", name: "Sell" },
];
const colapsitems: CollapseProps['items'] = [
    {
        key: '1',
        label: (
            <div className="flex items-center justify-between">
                <h5 className="text-base text-subTextColor font-semibold">Fee</h5>
                <p>100</p>
            </div>
        ),
        children: <CollapseItem fee="5.00" netAmount="2.00" totalAmount="848.73" />
    },
];
const fiatCurrencies: CurrencyItem[] = [
    {
        key: "USD",
        name: "USD",
        value: "470",
        icon: "https://devdottstoragespace.blob.core.windows.net/arthaimages/briton.svg"
    },
    {
        key: "USDT",
        name: "USDT",
        value: "470",
        icon: "https://devdottstoragespace.blob.core.windows.net/arthaimages/briton.svg"
    },
];
const cryptoCurrencies: CurrencyItem[] = [
    {
        key: "BTC",
        name: "BTC",
        value: "",
        icon: "https://devdottstoragespace.blob.core.windows.net/arthaimages/BTC.svg"
    },
    {
        key: "ETH",
        name: "ETH",
        value: "",
        icon: "https://devdottstoragespace.blob.core.windows.net/arthaimages/ETH.svg"
    },
];
const OnrampofframpSection: React.FC = () => {
    const handleTabChange = (key: string | string[]) => {
        console.log('Active tab changed:', key);
    };
    return (
        <div className="kpicardbg mt-7">
            <div className="flex justify-end gap-2">
                <div className="!mt-0 toggle-btn">
                    <AppTabs
                        list={tabs}
                        itemFields={{ title: "name", key: "id" }}
                        className="custom-crypto-tabs"
                    />
                </div>
            </div>
            <PaymentForm
                items={fiatCurrencies}
                item={cryptoCurrencies}
                colapsitems={colapsitems}
                onChange={handleTabChange}
            />
        </div>
    );
};
export default OnrampofframpSection;