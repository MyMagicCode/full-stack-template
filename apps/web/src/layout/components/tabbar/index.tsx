import { theme } from "antd";
import type { FC } from "react";
import TabList from "./tab-list";




const Tabbar: FC = () => {
  const {
    token,
  } = theme.useToken();
  return <div className="h-header fixed top-0 w-full z-1000 border-border border-b" style={{ background: token.colorBgContainer }}>
    <TabList />
  </div>
}


export default Tabbar