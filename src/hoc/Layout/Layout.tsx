import React, { PropsWithChildren, useState } from "react";
import { MenuToggle } from "../../components/Navigation/MenuToggle/MenuToggle";
import { Drawer } from "../../components/Navigation/Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { ToastSuccess as Toast } from "../../components/Toast/Toast";
import { Header } from "../../components/Header/Header";
import { selectNotifyFlag, selectNotifyStatus } from "../../store/notify/notifiesSelectors";
import { notifyActions } from "../../store/notify";

interface Props {}

export const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
	const dispatch = useDispatch();
	const [menu, setMenu] = useState(false);

	const notifyStatus = useSelector(selectNotifyStatus);
	const flag = useSelector(selectNotifyFlag);

	const toggleMenuHandler = () => {
		setMenu((x) => !x);
	};

	return (
		<div className="layout">
			<Drawer isOpen={menu} />

			<MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />

			<main className={menu ? "main-narrow" : ""}>
				<Header />
				{children}
			</main>
			<Toast
				status={notifyStatus}
				flag={flag}
				title="Расследование завершено"
				setStatus={() => {
					dispatch(notifyActions.setStatusNotify(false));
				}}
				setFlag={(flag) => {
					dispatch(notifyActions.setFlagNotify(flag));
				}}
			/>
		</div>
	);
};
