import React, { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
	changeDate?: (date: Date) => void;
}

export const InputDate: React.FC<Props> = ({ changeDate }) => {
	const [startDate, setStartDate] = useState<ReactDatePickerProps["selected"]>(new Date());

	return (
		<DatePicker
			selected={startDate}
			onChange={(date: Date) => {
				setStartDate(date);
				changeDate?.(date);
			}}
		/>
	);
};
