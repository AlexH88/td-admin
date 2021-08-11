import React, { PropsWithChildren } from "react";

export const Tooltip: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return <div className="tooltip">{children}</div>;
};
