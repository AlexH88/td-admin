import React, { MouseEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/UI/Loader/Loader";
import Dropzone from "react-dropzone";
import uploadFile from "../../assets/uploadFile/uploadFile.svg";
import Button from "../../components/UI/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { Dropdown } from "../../components/UI/Dropdown/Dropdown";
import { fetchDocuments } from "../../store/documents/operations";
import TableModal from "../../components/TableModal/TableModal";
import { fetchInvestigate } from "../../store/investigate/operations";
import { ceilNumber } from "../../helpers/helpers";
import { NamedProps } from "react-select/src/Select";
import { selectAllDocuments } from "../../store/documents/documentsSelectors";
import {
	selectCurrentValueNameDoc,
	selectCurrentValuePageNumber,
	selectDocumentId,
	selectDocumentsOptions,
	selectFiles,
	selectImageUrl,
	selectInvestigatesError,
	selectInvestigatesLoading,
	selectPageNumber,
	selectPagesOptions,
	selectResultInvestigate,
} from "../../store/investigate/investigatesSelectors";
import { investigatesActions } from "../../store/investigate";

const style: React.CSSProperties = {
	borderRadius: "26px",
	padding: "22px",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	fontSize: "18px",
	height: "59vh",
	background: "#F2F4F4",
	display: "flex",
	flexDirection: "column",
};

const fitStyle: React.CSSProperties = {
	borderRadius: "26px",
	padding: "22px",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	fontSize: "18px",
	height: "59vh",
	background: "#F2F4F4",
	display: "flex",
	flexDirection: "column",
	width: "fit-content",
	margin: "0 auto",
};

interface Props {
	files: any[];
	documetsOptions: NamedProps["options"];
}

export const Investigation: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const [modalActive, setModalActive] = React.useState(false);
	const documents = useSelector(selectAllDocuments);
	const documentId = useSelector(selectDocumentId);

	const documentsOptions = useSelector(selectDocumentsOptions);
	const pagesOptions = useSelector(selectPagesOptions);
	const pageNumber = useSelector(selectPageNumber);
	const imageUrl = useSelector(selectImageUrl);
	const loading = useSelector(selectInvestigatesLoading);
	const files = useSelector(selectFiles);
	const resultInvestigate = useSelector(selectResultInvestigate);
	const currentValueNameDoc = useSelector(selectCurrentValueNameDoc);
	const currentValuePageNumber = useSelector(selectCurrentValuePageNumber);
	const error = useSelector(selectInvestigatesError);

	console.log("RESULTINVESTIGATE");
	console.log(resultInvestigate);

	useEffect(() => {
		dispatch(fetchDocuments());
	}, []);

	const onDrop = (eventFiles: any): void => {
		const file = eventFiles[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			// @ts-ignore
			dispatch(
				investigatesActions.setDropFile({
					imageUrl: reader.result,
					files: eventFiles,
				})
			);
		};
		if (file) {
			reader.readAsDataURL(file);
			// @ts-ignore
			investigatesActions.setDropFile({
				imageUrl: reader.result,
				files: eventFiles,
			});
		}
	};

	const onChangeNameDoc = (e: any) => {
		// const { documents, getOptionsPage, setValueNameDoc } = this.props;
		dispatch(investigatesActions.setIdDoc(e.value));

		const document = documents.find((val: any) => val.documentId == e.value);

		dispatch(investigatesActions.getOptionsPageSelect(document?.pageCount ?? 0));
		dispatch(investigatesActions.setValueNameDoc(document));
	};

	const onChangeNumber = (e: any) => {
		dispatch(investigatesActions.setPageNumber(e.value));
		dispatch(investigatesActions.setValuePageNumber(e.value));
	};

	const isValidation = () => {
		return !(documentId && imageUrl && pageNumber);
	};

	const startInvestigation: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		const body = new FormData();

		body.append("file", files[0]);
		body.append("fileName", files[0].name);
		body.append("documentId", documentId);
		//TODO: Gorshteyn - check type
		body.append("pageNumber", pageNumber!);

		dispatch(fetchInvestigate(body));
	};

	const getResultInvestigate = () => {
		if (loading) {
			return (
				<div style={{ marginTop: "40px" }}>
					<Loader />
				</div>
			);
		}

		if (error) {
			return (
				<div className="inest-res">
					<span>{error}</span>
				</div>
			);
		}

		if (resultInvestigate) {
			if (resultInvestigate?.culprit) {
				return (
					<div style={{ width: "100%", textAlign: "center" }}>
						<table>
							<tbody>
								<tr>
									<th>Идентификатор пользователя</th>
									<th>{resultInvestigate.culprit?.userId}</th>
								</tr>
								<tr>
									<th>Вероятность</th>
									<th>{ceilNumber(resultInvestigate?.culprit?.confidence)}</th>
								</tr>
								{resultInvestigate?.culprit?.parameters &&
								resultInvestigate?.culprit?.parameters.length > 0 ? (
									<tr>
										<th>{resultInvestigate?.culprit?.parameters[0]["name"]}</th>
										<th>{resultInvestigate?.culprit?.parameters[0]["value"]}</th>
									</tr>
								) : null}
							</tbody>
						</table>
						<div style={{ marginTop: "20px" }}>
							<Button type="btn-all-data" onClick={() => setModalActive(true)}>
								Все данные
							</Button>
						</div>
					</div>
				);
			} else {
				return (
					<div className="inest-res">
						<span>Нет результата</span>
					</div>
				);
			}
		} else {
			return (
				<div className="inest-res">
					<span>Начните расследование для получения результата</span>
				</div>
			);
		}
	};

	return (
		<div className="container invistigation">
			<div className="invistigation-event">
				<form>
					<Dropdown
						options={documentsOptions}
						handleChange={onChangeNameDoc}
						defaultValue={currentValueNameDoc}
						label="Выберите оригинальный файл"
						disabled={!!loading}
					/>
					<div style={{ display: "flex", alignItems: "baseline" }}>
						<label style={{ marginRight: "10px", color: "#737381" }}>Номер страницы</label>
						<Dropdown
							options={pagesOptions || []}
							handleChange={onChangeNumber}
							defaultValue={currentValuePageNumber}
							label=""
							style={{ width: "70px" }}
							disabled={!!(pagesOptions.length == 0 || loading)}
						/>
					</div>

					<Dropzone onDrop={onDrop} disabled={!!loading}>
						{({ getRootProps, getInputProps }) => (
							<section className="container11">
								<div {...getRootProps({ className: "dropzone" })} style={imageUrl ? fitStyle : style}>
									<input {...getInputProps()} />
									{imageUrl ? (
										<img style={{ maxHeight: "100%", maxWidth: "100%" }} src={imageUrl} />
									) : (
										<>
											<p>
												<img src={uploadFile} alt="upload" />
											</p>
											<p
												style={{
													textAlign: "center",
													color: "#737381",
													fontSize: "16px",
												}}
											>
												Нажмите для загрузки или <br /> перетащите файл в данную область
											</p>
										</>
									)}
								</div>
								<aside>
									<h4>
										Расследуемый файл:{" "}
										{files.length > 0 && (
											<span style={{ color: "#222222", fontSize: "16px" }}>{files[0].path}</span>
										)}
									</h4>
								</aside>
							</section>
						)}
					</Dropzone>

					<Button onClick={startInvestigation} type="submit" disabled={isValidation() || loading}>
						Расследовать
					</Button>
				</form>
			</div>
			<div className="invistigation-result">
				<div className="invistigation-result_header">Результат расследования</div>
				<div className="invistigation-result_body">{getResultInvestigate()}</div>
			</div>

			<Modal active={modalActive} setActive={setModalActive}>
				{resultInvestigate && <TableModal data={resultInvestigate} />}
			</Modal>
		</div>
	);
};
