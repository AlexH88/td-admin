import React from "react";
import { Column, useTable } from "react-table";
import pagFirst from "../../assets/pagFirst/pagFirst.svg";
import pagPrev from "../../assets/pagPrev/pagPrev.svg";
import pagNext from "../../assets/pagNext/pagNext.svg";
import pagLast from "../../assets/pagLast/pagLast.svg";

export interface TableButtonType {
	disabledLink: boolean;
	clickLink: () => void;
}

interface Props<T extends object = {}> {
	columns: Column<T>[];
	data: T[];
	self: TableButtonType;
	first: TableButtonType;
	previous: TableButtonType;
	next: TableButtonType;
	last: TableButtonType;
	totalCount: number;
	pageCount: number;
	page: number;
}

export const Table: React.FC<Props> = ({
	columns,
	data,
	self,
	first,
	previous,
	next,
	last,
	totalCount,
	pageCount,
	page,
}) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});

	const headerColumns: typeof headerGroups = [];
	headerColumns.push(headerGroups[1]);

	return (
		<div className="main-table">
			<div className="main-table_body">
				<table {...getTableProps()}>
					<thead>
						{headerColumns.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="main-table_footer">
				<div className="pagination">
					<div className="pagination-events">
						<div className="pagination-events_nav">
							{/*@ts-ignore*/}
							<img src={pagFirst} onClick={first.clickLink} disabled={first.disabledLink} />
							{/*@ts-ignore*/}
							<img src={pagPrev} onClick={previous.clickLink} disabled={previous.disabledLink} />
							<span onClick={self.clickLink}>{page + 1}</span>
							{/*@ts-ignore*/}
							<img src={pagNext} onClick={next.clickLink} disabled={next.disabledLink} />
							{/*@ts-ignore*/}
							<img src={pagLast} onClick={last.clickLink} disabled={last.disabledLink} />
						</div>
						<div className="pagination-events_pages mr-left cl-fs">Всего страниц: {pageCount}</div>
						<div className="pagination-events_records mr-left cl-fs">Всего записей: {totalCount}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const MainTable: React.FC<Props> = (props) => {
	const { data = [], columns, self, first, previous, next, last, totalCount, pageCount, page } = props;

	return (
		<div className="table-wrapper">
			<Table
				columns={columns}
				data={data}
				self={self}
				first={first}
				previous={previous}
				next={next}
				last={last}
				totalCount={totalCount}
				pageCount={pageCount}
				page={page}
			/>
		</div>
	);
};
