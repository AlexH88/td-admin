import React from "react";
import { formatDateTime, ceilNumber, truncate } from "../../helpers/helpers";
import { InvestigatesType } from "../../models/investigates/Investigates";

interface Props extends InvestigatesType {}

const isLastItem = (length: number | undefined, index: number): boolean => {
	return length ? index !== length - 1 : true;
};

export const ItemsTableModal: React.FC<Props> = (data) => {
	if (data) {
		if (data.culprit) {
			return (
				<>
					{data.raw?.map((item, index) => {
						return (
							<tr key={`${item.userId}-${index}`}>
								<th
									style={{
										borderRight: "1px solid #ddd",
										padding: "0",
										textAlign: "center",
										fontSize: "18px",
										// @ts-ignore
										fontWeight: "400",
										color: "#5176A2",
										// @ts-ignore
										borderBottom: isLastItem(data.raw.length, index)
											? null
											: "0px solid rgb(221, 221, 221)",
									}}
								>
									<span
										style={{
											fontSize: "22px",
											position: "relative",
											top: "-40px",
											left: "5px",
										}}
									>
										{index + 1}
									</span>
								</th>
								<th
									style={
										isLastItem(data?.raw?.length, index)
											? { padding: "0" }
											: {
													padding: "0",
													borderBottom: "0px solid rgb(221, 221, 221)",
											  }
									}
								>
									<tr>
										<th
											style={{
												borderRight: "1px solid #ddd",
												width: "210px",
											}}
										>
											Идентификатор пользователя
										</th>
										<th style={{ width: "220px" }}>
											<span title={item.userId}>{truncate(item.userId)}</span>
										</th>
									</tr>
									<tr
										style={{
											borderBottom: "0px solid rgb(221, 221, 221)",
										}}
									>
										<th
											style={{
												borderRight: "1px solid #ddd",
												borderBottom: "1px solid rgb(221, 221, 221)",
												width: "210px",
											}}
										>
											Время и дата запроса
										</th>
										<th
											style={{
												width: "220px",
												borderBottom: "1px solid rgb(221, 221, 221)",
											}}
										>
											{formatDateTime(item.copyTime, ".")}
										</th>
									</tr>
									<tr
										style={{
											borderBottom: "0px solid rgb(221, 221, 221)",
										}}
									>
										<th
											style={{
												borderRight: "1px solid #ddd",
												borderBottom: "0px solid rgb(221, 221, 221)",
												width: "210px",
											}}
										>
											Вероятность
										</th>
										<th
											style={{
												width: "220px",
												borderBottom: "0px solid rgb(221, 221, 221)",
											}}
										>
											{ceilNumber(item.confidence)}
										</th>
									</tr>
									{item.parameters && item.parameters.length > 0 ? (
										<tr
											style={{
												borderBottom: "0px solid #ddd",
												width: "210px",
											}}
										>
											<th
												style={{
													borderRight: "1px solid #ddd",
													borderBottom: "0px solid #ddd",
													width: "220px",
												}}
											>
												{item.parameters[0]["name"]}
											</th>
											<th
												style={{
													borderBottom: "0px solid #ddd",
												}}
											>
												{item.parameters[0]["value"]}
											</th>
										</tr>
									) : null}
								</th>
							</tr>
						);
					})}
				</>
			);
		} else {
			return null;
		}
	}
	return null;
};
