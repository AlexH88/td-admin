import React from "react";
import Select from "react-select";
import { NamedProps } from "react-select/src/Select";

interface Props {
	options?: NamedProps["options"];
	handleChange?: NamedProps["onChange"];
	label: string;
	style?: React.CSSProperties;
	disabled?: boolean;
	// defaultValue?: NamedProps["defaultValue"];
	// TODO: Gorshteyn add types
	defaultValue?: any;
}

export const Dropdown: React.FC<Props> = ({
	options = [],
	handleChange,
	label,
	style = {},
	disabled,
	defaultValue = [],
}) => {
	return (
		<div className="dropdown" style={style}>
			<Select
				className="basic-multi-select"
				options={options}
				defaultValue={defaultValue}
				placeholder={label}
				onChange={handleChange}
				isDisabled={disabled}
				theme={(theme) => ({
					...theme,
					borderRadius: 3,
					colors: {
						...theme.colors,
						primary25: "#f1e8e8",
						primary: "pink",
					},
				})}
			/>
		</div>
	);
};
