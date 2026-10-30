import type { FC } from "react";
import PageLayout from "./layout";
import "./design/index.css";
import AntdProvider from "./components/antd-provider";

const App: FC = () => {
	return (
		<AntdProvider>
			<PageLayout></PageLayout>
		</AntdProvider>
	);
};

export default App;
