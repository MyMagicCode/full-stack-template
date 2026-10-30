import { theme } from "antd";
import type { FC } from "react";

const PageHeader: FC = () => {
  const {
    token,
  } = theme.useToken();
  return <div className="h-header fixed top-0 w-full z-1000 border-border border-b" style={{ background: token.colorBgContainer }}>

  </div>
}


export default PageHeader