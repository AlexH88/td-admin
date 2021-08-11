import React, { useCallback } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";

interface Props {
	selectFile: <T extends File>(acceptedFiles: T[], fileRejections?: FileRejection[], event?: DropEvent) => void;
	disabled: boolean;
	id: string;
}

export const Dropzone: React.FC<Props> = (props) => {
	const onDrop = useCallback((acceptedFiles) => {
		props.selectFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		disabled: props.disabled,
	});

	return (
		<div
			{...getRootProps()}
			style={{
				border: "4px dashed lightgrey",
				borderRadius: "12px",
				padding: "32px",
				marginBottom: "32px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				fontSize: "18px",
			}}
		>
			<input id={props.id} {...getInputProps()} />
			{isDragActive ? (
				<p>Перенесите файлы сюда ...</p>
			) : (
				<p>Перетащите файлы сюда, либо кликните чтобы выбрать файлы</p>
			)}
		</div>
	);
};
