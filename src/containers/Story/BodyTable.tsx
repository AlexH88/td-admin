import React from "react";
import { Loader } from "../../components/UI/Loader/Loader";
import { ceilNumber, formatDateTime, getNameDocument } from "../../helpers/helpers";
import icon from "../../assets/allData/allData.svg";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { StoryInvestigatesInvestigates } from "../../models/story/StoryInvestigates";
import { Status } from "../../constants/status";

const renderParameters = (parametrs: any[]) => {
	const defaultStyle: React.CSSProperties = {
		borderRight: "1px solid #ddd",
	};
	const lastStyle: React.CSSProperties = {
		borderRight: "1px solid #ddd",
		borderBottom: "0px solid #ddd",
	};

	if (parametrs[0]) {
		let l = Object.entries(parametrs[0]).length;
		return Object.entries(parametrs[0]).map((item: any, index) => {
			return (
				<tr>
					<th style={l == index + 1 ? lastStyle : defaultStyle}>{item[0]}</th>
					<th style={l == index + 1 ? { borderBottom: "0px solid #ddd" } : {}}>{item[1]}</th>
				</tr>
			);
		});
	}
};

type PropsTooltipBody = (
	userId: string,
	confidence: string | number,
	parametrs: any[],
	copyTime: string
) => React.ReactNodeArray | React.ReactNode;

const renderBodyTooltip: PropsTooltipBody = (userId, confidence, parametrs, copyTime) => {
	if (userId && confidence) {
		return (
			<>
				<table>
					<tbody>
						{!(parametrs && parametrs[0]) ? (
							<tr>
								<tr>
									<th style={{ borderRight: "1px solid #ddd" }}>Процент вероятности</th>
									<th>{ceilNumber(confidence)}</th>
								</tr>
								<tr>
									<th style={{ borderRight: "1px solid #ddd" }}>Время и дата запроса</th>
									<th>{formatDateTime(copyTime)}</th>
								</tr>
								<tr>
									<th
										style={{
											borderRight: "1px solid #ddd",
											borderBottom: "0px solid #ddd",
										}}
									>
										Пользователь
									</th>
									<th style={{ borderBottom: "0px solid #ddd" }}>{userId}</th>
								</tr>
							</tr>
						) : (
							<tr>
								<tr>
									<th style={{ borderRight: "1px solid #ddd" }}>Процент вероятности</th>
									<th>{ceilNumber(confidence)}</th>
								</tr>
								{renderParameters(parametrs)}
							</tr>
						)}
					</tbody>
				</table>
			</>
		);
	} else {
		<>
			<div style={{ marginTop: "40px" }}>
				<Loader />
			</div>
			;
		</>;
	}
};

interface Props {
	investigates?: StoryInvestigatesInvestigates[];
	documents: any;
	searchStr: string;
	onGetInvestigate: (id: string) => void;
	showModal: (value: boolean) => void;
}

export const BodyTable: React.FC<Props> = ({
	investigates = [],
	documents,
	searchStr,
	onGetInvestigate,
	showModal,
}) => {
	const sortInvestigates: StoryInvestigatesInvestigates[] = [...investigates].sort((a, b) => {
		// @ts-ignore
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<>
			{sortInvestigates.map((item, index) => {
				let arr = [];
				arr = item.result;
				let userId = "";
				let confidence: string | number = "";
				let paramentrs = [];
				let copyTime = "";
				if (arr.length > 0) {
					userId = arr[0].userId;
					confidence = arr[0].confidence;
					copyTime = arr[0].copyTime;
					if (arr[0].parameters) {
						paramentrs = arr[0].parameters;
					}
				}

				let style = {};
				if (item.status == Status.Fail) {
					style = { background: "#e8b9b9" };
				}

				let nameDoc = getNameDocument(item.documentId, documents) || "";

				if (nameDoc.toLowerCase().indexOf(searchStr.toLowerCase()) > -1) {
					return (
						<tr key={index} style={style}>
							<th>{formatDateTime(item.date)}</th>
							<th>{nameDoc}</th>
							<th>
								<span className="wrapper-tooltip">
									{userId}
									<Tooltip>{renderBodyTooltip(userId, confidence, paramentrs, copyTime)}</Tooltip>
								</span>
							</th>
							<th>{ceilNumber(confidence)}</th>
							<th>
								<img
									// @ts-ignore
									disabled={item.status == Status.Fail}
									style={{ cursor: "pointer" }}
									src={icon}
									alt="avatar"
									onClick={() => {
										onGetInvestigate(item.investigateId);
										showModal(true);
									}}
								/>
							</th>
						</tr>
					);
				}
			})}
		</>
	);
};
