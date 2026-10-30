import { DownOutlined, HomeOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Dropdown, type MenuProps } from "antd";
import type { FC } from "react";

interface UserActionsProps {
  simple?: boolean
}

const UserActions: FC<UserActionsProps> = ({ simple }) => {

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: '主页'
    },
    {
      key: '2',
      icon: <SettingOutlined />,
      label: '个人设置'
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      icon: <LogoutOutlined />,
      label: "退出登陆",
    },
  ]

  return <Dropdown menu={{ items }} trigger={['click']}>
    <Button
      color="default"
      variant="filled"
      classNames={{
        root: 'px-2'
      }}
      block>
      <div className="w-full flex justify-between gap-2">
        <span className="relative flex shrink-0 overflow-hidden rounded-full size-6">
          <img className="size-full aspect-square" src="avatar.svg" alt="avatar" />
        </span>
        {!simple && <div className="flex-1 flex justify-between gap-2">
          <span title="123123aaa daw1 1312311" className="flex-1 text-left truncate w-0">
            123123aaa daw1 1312311
          </span>
          <DownOutlined />
        </div>}
      </div>
    </Button>
  </Dropdown>
}

export default UserActions;