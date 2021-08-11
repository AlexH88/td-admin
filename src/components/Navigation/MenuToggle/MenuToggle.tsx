import React from "react";
import iconBars from "../../../assets/iconBars/iconBars.svg";
import iconTimes from "../../../assets/iconTimes/iconTimes.svg";

interface Props {
	onToggle: () => void;
	isOpen: boolean;
}

export const MenuToggle: React.FC<Props> = (props) => {
	const cls = ["menu-toggle", "fa"];

	if (props.isOpen) {
		cls.push("open");
	} else {
		cls.push("menu-narrow");
	}
	return (
		<i className={cls.join(" ")} onClick={props.onToggle}>
			{props.isOpen ? <img src={iconTimes} /> : <img src={iconBars} />}
		</i>
	);
};
