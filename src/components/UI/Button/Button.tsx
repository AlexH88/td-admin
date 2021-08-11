import React, { MouseEventHandler } from "react";

type ButtonType = "primary" | "success" | "submit" | "btn-all-data";

interface Props {
	type: ButtonType;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => {
	const cls = ["button", props.type];

	return (
		<button onClick={props.onClick} className={cls.join(" ")} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
