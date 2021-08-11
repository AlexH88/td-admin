import React from "react";

interface Props {
	type: string;
	valid: boolean;
	touched: boolean;
	shouldValidate: boolean;
	label: string;
	errorMessage: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

type InvalidHandlerType = (props: Props) => boolean;

const isInvalid: InvalidHandlerType = ({ valid, touched, shouldValidate }) => {
	return !valid && shouldValidate && touched;
};

export const Input: React.FC<Props> = (props) => {
	const inputType = props.type || "text";
	const cls = ["input"];
	const htmlFor = `${inputType}-${Math.random()}`;

	if (isInvalid(props)) {
		cls.push("invalid");
	}

	return (
		<div className={cls.join(" ")}>
			<label htmlFor={htmlFor}>{props.label}</label>
			<input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange} />

			{isInvalid(props) ? <span>{props.errorMessage || "Введите верное значение"}</span> : null}
		</div>
	);
};
