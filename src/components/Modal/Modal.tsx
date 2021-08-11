import React, { PropsWithChildren } from "react";
import iconClose from "../../assets/iconClose/iconClose.svg";

interface Props {
	active: boolean;
	setActive: (value: boolean) => void;
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? "modal active" : "modal"}
			onClick={() => {
				setActive(false);
			}}
		>
			<div className="content" onClick={(e) => e.stopPropagation()}>
				<img
					className="icon-close"
					src={iconClose}
					onClick={() => {
						setActive(false);
					}}
				/>
				{children}
			</div>
		</div>
	);
};
