import React from "react";

interface Props {
	label: string;
	customClass: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
	value: string;
	options: Array<{ value: string; text: string }>;
}

export const Select: React.FC<Props> = (props) => {
	const htmlFor = `${props.label}-${Math.random()}`;

	return (
		<div className={`select ${props.customClass}`}>
			<label htmlFor={htmlFor}>{props.label}</label>
			{/*@ts-ignore*/}
			<select id={htmlFor} value={props.value} onChange={props.onChange} placeholder={<div>Type to search</div>}>
				{props.options.map((option, index) => {
					return (
						<option value={option.value} key={option.value + index}>
							{option.text}
						</option>
					);
				})}
			</select>
		</div>
	);
};
