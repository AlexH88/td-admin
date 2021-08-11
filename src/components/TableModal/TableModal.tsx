import React from "react";
import { ItemsTableModal } from "./ItemsTableModal";
import icon from "../../assets/allData/allData.svg";
import { Loader } from "../UI/Loader/Loader";
import { InvestigatesType } from "../../models/investigates/Investigates";

interface Props {
	data: InvestigatesType | null;
}

const TableModal: React.FC<Props> = (props) => {
	const { data } = props;

	return (
		<div className="alldata">
			<div className="alldata-header">
				<img src={icon} />
				<span style={{ fontSize: "24px" }}>Все данные расследования</span>
			</div>
			<div className="alldata-content">
				<table>
					<thead>
						<tr>
							<th
								style={{
									borderRight: "1px solid rgb(221, 221, 221)",
									width: "20px",
									paddingRight: "10px",
									paddingBottom: "17px",
								}}
							>
								{/*@ts-ignore*/}
								<span style={{ fontWeight: "600" }}>№</span>
							</th>
							<th
								style={{
									width: "460px",
									paddingLeft: "10px",

									paddingBottom: "17px",
								}}
							>
								{/*@ts-ignore*/}
								<span style={{ fontWeight: "600" }}>Результат расследования</span>
							</th>
						</tr>
					</thead>
					{data?.culprit ? (
						<tbody>{ItemsTableModal(data)}</tbody>
					) : (
						<div
							style={{
								marginTop: "40px",
								position: "relative",
								left: "200px",
								top: "110px",
							}}
						>
							<Loader />
						</div>
					)}
				</table>
			</div>
		</div>
	);
};

export default TableModal;
