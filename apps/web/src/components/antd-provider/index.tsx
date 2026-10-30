import { App, ConfigProvider } from "antd";
import type { FC, PropsWithChildren } from "react";
import useLobeTheme from "./lobeTheme";
import { StyleProvider } from "@ant-design/cssinjs";

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const configProps = useLobeTheme();
	return (
		<StyleProvider layer>
			<ConfigProvider {...configProps}>
				<App>{children}</App>
			</ConfigProvider>
		</StyleProvider>

	);
};

export default AntdProvider;
