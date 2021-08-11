import React, { PropsWithChildren } from "react";
import chipClose from "../../assets/chipClose/chipClose.svg";

interface Props {
	click: () => void;
}

export const Chip: React.FC<PropsWithChildren<Props>> = ({ children, click }) => {
	return (
		<div className="chip-item">
			<span>{children}</span> <img src={chipClose} onClick={click} />
		</div>
	);
};
