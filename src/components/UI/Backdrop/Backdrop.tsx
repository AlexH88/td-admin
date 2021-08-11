import React from "react";

interface Props {
	onClick: () => void;
}

export const Backdrop: React.FC<Props> = (props) => <div className="backdrop" onClick={props.onClick} />;
