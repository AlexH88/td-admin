import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvestigates, fetchSelectedInvestigate } from "../../store/story/operations";
import { fetchDocuments } from "../../store/documents/operations";
import { Modal } from "../../components/Modal/Modal";
import { Loader } from "../../components/UI/Loader/Loader";
import searchIcon from "../../assets/searchIcon/searchIcon.svg";
import { BodyTable } from "./BodyTable";
import TableModal from "../../components/TableModal/TableModal";
import { selectInvestigates, selectSelectedInvestigate } from "../../store/story/storeysSelectors";
import { selectAllDocuments } from "../../store/documents/documentsSelectors";

interface Props {}

export const Story: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState(false);
	const [resultInvestigate, setResultInvestigate] = useState(null);
	const [searchStr, setSearchStr] = useState("");

	const investigates = useSelector(selectInvestigates);
	const selectedInvestigate = useSelector(selectSelectedInvestigate);
	const documents = useSelector(selectAllDocuments);

	useEffect(() => {
		dispatch(fetchInvestigates());
		dispatch(fetchDocuments());
	}, []);

	const handleChangeSearch = (e: any) => {
		setSearchStr(e.target.value);
	};

	return (
		<div className="container">
			<>
				<div>
					<table>
						<thead>
							<tr>
								<th>Дата и время</th>
								<th>
									<input
										className="filter-name-doc"
										type="text"
										value={searchStr}
										onChange={handleChangeSearch}
										placeholder="Наименование документа"
									/>
									<i style={{ position: "relative", top: "4px" }}>
										<img src={searchIcon} />
									</i>
								</th>
								<th>Получатель документа</th>
								<th>Вероятность</th>
								<th>Все данные</th>
							</tr>
						</thead>
						<tbody>
							{investigates && documents ? (
								<BodyTable
									investigates={investigates}
									documents={documents}
									searchStr={searchStr}
									onGetInvestigate={(id) => dispatch(fetchSelectedInvestigate(id))}
									showModal={() => {
										setModalActive(true);
									}}
								/>
							) : (
								<div style={{ marginTop: "40px" }}>
									<Loader />
								</div>
							)}
						</tbody>
					</table>
				</div>
			</>

			<Modal active={modalActive} setActive={setModalActive}>
				<TableModal data={selectedInvestigate} />
			</Modal>
		</div>
	);
};
