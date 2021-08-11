import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainTable, TableButtonType } from "../../components/Table/Table";
import { fetchJobs } from "../../store/jobs/operations";
import allData from "../../assets/allData/allData.svg";
import { Modal } from "../../components/Modal/Modal";
import { TooltipTableJob } from "./TooltipTableJob";
import { formatDateTime } from "../../helpers/helpers";
import { selectLoading, selectMetadata, selectRecords } from "../../store/jobs/jobsSelectors";
import { JobsRecords } from "../../models/jobs/jobs";

interface Props {}

export const Journal: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState(false);
	const [eventData, setEventData] = useState<JobsRecords["eventData"] | null>(null);

	const records = useSelector(selectRecords);
	const metadata = useSelector(selectMetadata);
	const loading = useSelector(selectLoading);

	useEffect(() => {
		dispatch(fetchJobs());
	}, []);

	const newRowObj = (item: JobsRecords) => {
		return {
			date: formatDateTime(item.date),
			processName: item.processName,
			eventName: item.eventName,
			eventData: [item.eventData],
		};
	};

	const formatRecords = (records: JobsRecords[] = []) => {
		return records.map(newRowObj);
	};

	const getCurrentEventData = (id: number) => {
		setEventData(records[id].eventData);
	};

	const changePage = (query: string) => {
		dispatch(fetchJobs(query));
	};

	const getObgLink = (link: string): TableButtonType => {
		return {
			clickLink: () => {
				changePage(link);
			},
			disabledLink: !link,
		};
	};

	const columns = [
		{
			Header: "Info",
			columns: [
				{
					Header: "Дата и время",
					accessor: "date",
				},
				{
					Header: "Тип процесса",
					accessor: "processName",
				},
				{
					Header: "Событие",
					accessor: "eventName",
				},
				{
					Header: "Все данные",
					id: "eventData",
					accessor: (data: any, index: number) => {
						return (
							<div>
								<img
									style={{ cursor: "pointer" }}
									src={allData}
									onClick={() => {
										getCurrentEventData(index);
										setModalActive(true);
									}}
								/>
							</div>
						);
					},
				},
			],
		},
	];

	return (
		<div className="container job">
			{metadata && records ? (
				<>
					<MainTable
						columns={columns}
						data={formatRecords(records)}
						totalCount={metadata.totalCount}
						pageCount={metadata.pageCount}
						page={metadata.page}
						self={getObgLink(metadata.links.self)}
						first={getObgLink(metadata.links.first)}
						previous={getObgLink(metadata.links.previous)}
						next={getObgLink(metadata.links.next)}
						last={getObgLink(metadata.links.last)}
					/>
					<Modal active={modalActive} setActive={setModalActive}>
						<TooltipTableJob data={eventData} />
					</Modal>
				</>
			) : null}
		</div>
	);
};
