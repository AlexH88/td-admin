import React, { useRef, useState } from "react";
import { Dropdown } from "../../components/UI/Dropdown/Dropdown";
import { InputDate } from "../../components/UI/inputdate/inputdate";
import { useClickAway } from "react-use";

interface Props {}

export const FilterForm: React.FC<Props> = (props) => {
	const [showModal, setShowModal] = useState(false);

	const ref = useRef(null);

	useClickAway(ref, () => setShowModal(false));

	return (
		<div className="filter-form">
			<form>
				<div className="filter-form_date">
					<label>Дата с:</label>
					<InputDate />

					<label>Дата по:</label>
					<InputDate />
				</div>
				<div className="filter-form_type">
					<label>Тип процесса</label>
					<Dropdown options={[]} label="" style={{ width: "270px" }} />
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "15px",
					}}
				>
					<label>Событие</label>
					<Dropdown options={[]} label="" style={{ width: "270px" }} />
				</div>
				<div className="filter-form_id-task">
					<label>Идентификатор задачи:</label>
					<input type="text" name="id-task" />
				</div>
				<input type="submit" value="Поиск" />
			</form>
		</div>
	);
};
