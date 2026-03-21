import { Button, Table, Tooltip } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';

export default function TableRow({ row, selection }: { row: any; selection: any }) {
	return (
		<Table.Row
			// key={row.id}
			data-selected={selection.includes(row.id) ? '' : undefined}
			// onMouseOver={() => {
			// 	showButton(row.id, true);
			// }}
			// onMouseLeave={() => {
			// 	hideButton(row.id, false);
			// }}
		>
			{row.getVisibleCells().map((cell: any) => (
				<Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
			))}
		</Table.Row>
	);
}
