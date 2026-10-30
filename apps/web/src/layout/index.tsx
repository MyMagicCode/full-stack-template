import {
	DesktopOutlined,
	FileOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, theme } from "antd";
import type React from "react";
import UserActions from "./components/user-actions";
import { useState, type FC } from "react";
import Tabbar from "./components/tabbar";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2", <DesktopOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8"),
	]),
	getItem("Files", "9", <FileOutlined />),
	getItem("Files", "10", <FileOutlined />),
	getItem("Files", "11", <FileOutlined />),
	getItem("Files", "12", <FileOutlined />),
	getItem("Files", "13", <FileOutlined />),
	getItem("Files", "14", <FileOutlined />),
	getItem("Files", "15", <FileOutlined />),
	getItem("Files", "16", <FileOutlined />),
	getItem("Files", "17", <FileOutlined />),
];


const PageLayout: FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token,
	} = theme.useToken();

	const sidebarWidth = collapsed ? 60 : 220;
	const animationValue = `${token.motionDurationMid} ${token.motionEaseInOut}`

	return (
		<div className="min-h-[100vh] ">
			<div
				className="h-full flex flex-col overflow-hidden fixed top-0 border-border border-r"
				style={{
					width: sidebarWidth,
					transition: `width ${animationValue}`,
					backgroundColor: token.colorBgContainer
				}}
			>
				<div className="h-header flex justify-center items-center flex-shrink-0">
					<img className="w-[30px] h-[30px]" src="logo.svg" alt="logo" />
					<span className="font-bold block truncate [text-size-adjust:100%]" style={{
						width: collapsed ? 0 : 'auto',
						transition: `width ${animationValue}`,
					}}>Fantastic-admin</span>
				</div>
				<div className="overscroll-contain overflow-hidden flex flex-col h-full">
					<div className="overflow-auto h-full scrollbar-none">
						<Menu inlineCollapsed={collapsed} defaultSelectedKeys={["1"]} mode="inline" items={items} classNames={{
						}} />
					</div>
				</div>
				<div className="px-2 py-3 flex justify-end">
					<Button
						className="size"
						color="default"
						variant="filled"
						block={collapsed}
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
					/>
				</div>
				<div className="px-2 pb-3 flex-center">
					<UserActions simple={collapsed} />
				</div>
			</div>
			<div
				style={{
					paddingLeft: sidebarWidth,
					paddingTop: 50,
					transition: `padding ${animationValue}`,
				}}
			>
				<Tabbar />
				<div id="app-content" className="relative">
				</div>
			</div>
		</div>
	);
};

export default PageLayout;
