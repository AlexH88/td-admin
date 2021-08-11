import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContent } from "react-toastify/dist/types";

// TODO: Gorshteyn - Проверить статус

interface Props {
	status: boolean;
	title: ToastContent;
	setStatus: () => void;
	setFlag: (flag: boolean) => void;
	flag: boolean;
}

function notify<NotifyProps>(title: Props["title"], setStatus: Props["setStatus"], setFlag: Props["setFlag"]): void {
	toast(title, {
		autoClose: 5000,
		hideProgressBar: true,
		onClose: () => {
			setStatus();
			setFlag(true);
		},
	});
}

export const ToastSuccess: React.FC<Props> = ({ status, title, setStatus, setFlag, flag }) => {
	useEffect(() => {
		if (status && flag) {
			setFlag(false);
			notify(title, setStatus, setFlag);
		}
	});

	return (
		<ToastContainer
			limit={1}
			position="bottom-right"
			hideProgressBar={false}
			autoClose={false}
			newestOnTop={true}
			closeOnClick={false}
			draggable={false}
			rtl={false}
		/>
	);
};
