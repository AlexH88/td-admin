import React from "react";
import iconExit from "../../assets/iconExit/iconExit.svg";

interface Props {
	onExit: () => void;
}

export const SubMenu: React.FC<Props> = ({ onExit }) => {
	return (
		<div className="sub-menu">
			<span className="triangle" />
			<span className="sub-menu-content" onClick={onExit}>
				<img src={iconExit} />
				Выйти
			</span>
		</div>
	);
};
