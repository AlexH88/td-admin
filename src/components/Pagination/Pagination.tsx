import React from "react";

interface Props {
	page: number[];
	currentPage: number;
	onPageChanged: (value: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, currentPage, onPageChanged }) => {
	return (
		<div className="pagination">
			<ul>
				{page.map((item, index) => (
					<li
						key={`${item}-${index}`}
						onClick={() => {
							onPageChanged(item);
						}}
						className={currentPage === item ? "selected" : ""}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
