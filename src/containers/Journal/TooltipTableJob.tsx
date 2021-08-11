import React from "react";
import icon from "../../assets/allData/allData.svg";

const difference = (item: any) => {
	let res: any[] = [];
	if (item[0][1]) {
		item[0][1].map((item: any) => {
			res.push(Object.values(item));
		});
	}
	return res;
};

const separateObj = (data: any) => {
	let simple: any = [];
	let difficult: any = [];

	Object.entries(data).map((item, i) => {
		if (typeof item[1] !== "object") {
			simple.push(item);
		} else {
			difficult.push(item);
		}
	});

	return difficult.length > 0 ? simple.concat(difference(difficult)) : simple;
};

const renderObject = (data: any) => {
	data = separateObj(data);

	return data.map(([key, value]: any, i: number) => {
		return (
			<tr key={key}>
				<th>{key}</th>
				<th>
					<span title={value}>{value}</span>
				</th>
			</tr>
		);
	});
};

interface Props {
	data: any;
}

export const TooltipTableJob: React.FC<Props> = ({ data }) => {
	return (
		<div className="alldata">
			<div className="alldata-header">
				<img src={icon} />
				<span style={{ fontSize: "24px" }}>Все данные</span>
			</div>
			<div className="alldata-content jobs-table">
				<table>
					<tbody>{data ? renderObject(data) : null}</tbody>
				</table>
			</div>
		</div>
	);
};
