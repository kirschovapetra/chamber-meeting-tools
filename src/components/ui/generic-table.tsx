// 'use client';

import { ActionBar, Button, Portal, Table } from '@chakra-ui/react';
import {
	flexRender,
	getCoreRowModel,
	getGroupedRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { LuX } from 'react-icons/lu';

export default function GenericTable({
	data,
	columns,
	selection,
	toggleTooltip,
	deleteSelectedRows,
}: GenericTableType) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getGroupedRowModel: getGroupedRowModel(),
	});

	return (
		<>
			<Table.ScrollArea>
				<Table.Root interactive size='sm' variant='line' native>
					<Table.Header>
						{table.getHeaderGroups().map((headerGroup) => (
							<Table.Row bg='bg.subtle' key={headerGroup.id}>
								{headerGroup.headers.map((header: any) => (
									<Table.ColumnHeader key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
									</Table.ColumnHeader>
								))}
							</Table.Row>
						))}
					</Table.Header>
					<Table.Body>
						{table.getRowModel().rows.map((row) => (
							<Table.Row
								key={row.id}
								data-selected={Array.from(selection).includes(row.id) ? '' : undefined}
								onMouseEnter={() => {
									toggleTooltip(row.id, true);
								}}
								onMouseLeave={() => {
									toggleTooltip(row.id, false);
								}}
							>
								{row.getVisibleCells().map((cell: any) => (
									<Table.Cell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</Table.Cell>
								))}
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Table.ScrollArea>

			<ActionBar.Root open={Array.from(selection).length > 0}>
				<Portal>
					<ActionBar.Positioner>
						<ActionBar.Content>
							<ActionBar.SelectionTrigger>
								{Array.from(selection).length} selected
							</ActionBar.SelectionTrigger>
							<ActionBar.Separator />
							<Button variant='outline' size='sm' onClick={deleteSelectedRows}>
								Delete <LuX />
							</Button>
						</ActionBar.Content>
					</ActionBar.Positioner>
				</Portal>
			</ActionBar.Root>
		</>
	);
}
