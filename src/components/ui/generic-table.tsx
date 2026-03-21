'use client';

import { ActionBar, Button, Checkbox, IconButton, Menu, Portal, Table } from '@chakra-ui/react';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { buttonStyle } from '../styles';
import EditableName from './editable-name';
import { LuCirclePlus, LuX } from 'react-icons/lu';
import { dataTemplate, defaultRow } from '../data/data';
import RowButtons from './row-buttons';

export default function GenericTable(d: TimerRow[]) {
	const columnHelper = createColumnHelper<TimerRow>();
	const [data, setData] = useState<TimerRow[]>(dataTemplate);
	const [selection, setSelection] = useState<string[]>([]);
	const hasSelection = selection.length > 0;

	const toggleTimer = (info: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx);
		if (dataObj !== undefined) {
			dataObj.status = dataObj.status == 'Start' ? 'Stop' : 'Start';
			setData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const toggleTooltip = (dataObjIdx: any, visible: boolean) => {
		const dataObj = data.at(dataObjIdx);

		if (dataObj !== undefined) {
			dataObj.tooltipVisible = visible;

			console.log(dataObj);
			setData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const setColumnValue = (columnName: any | never, info: any, value: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx);
		if (dataObj !== undefined && dataObj.hasOwnProperty(columnName)) {
			dataObj[columnName as keyof typeof dataObj] = value;
			setData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const resetTimer = (info: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx);
		if (dataObj !== undefined) {
			dataObj.status = 'Start';
			dataObj.resultTime = '0:00';
			setData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const deleteSelectedRows = () => {
		setData(data.filter((val, i) => !selection.includes(i.toString())));
		setSelection([]);
	};
	const addRow = (info: any, offset: number) => {
		setData(data.toSpliced(info.row.index + offset, 0, defaultRow));
		setSelection([]);
	};
	const columns = [
		columnHelper.accessor('checkbox', {
			header: '',
			cell: (info: any) => {
				return (
					<Checkbox.Root
						size='sm'
						top='0.5'
						aria-label='Select row'
						checked={selection.includes(info.row.id)}
						onCheckedChange={(changes) => {
							setSelection((prev) => (changes.checked ? [...prev, info.row.id] : selection.filter((id) => id !== info.row.id)));
						}}
					>
						<Checkbox.HiddenInput />
						<Checkbox.Control />
					</Checkbox.Root>
				);
			},
		}),
		columnHelper.accessor('role', {
			header: 'Role',
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('role', info, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('speakerName', {
			header: 'Speaker',
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('speakerName', info, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('greenTime', {
			header: 'Green',
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('greenTime', info, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('amberTime', {
			header: 'Amber',
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('amberTime', info, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('redTime', {
			header: 'Red',
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('redTime', info, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('resultTime', {
			header: 'Result Time',
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('resultTime', info, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('status', {
			header: '',
			cell: (info: any) => {
				return (
					<RowButtons
						addRow={(offset: any) => addRow(info, offset)}
						toggleTimer={() => toggleTimer(info)}
						resetTimer={() => resetTimer(info)}
						value={info.getValue()}
					/>
				);
			},
		}),
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
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
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</Table.ColumnHeader>
								))}
							</Table.Row>
						))}
					</Table.Header>
					<Table.Body>
						{table.getRowModel().rows.map((row) => (
							<Table.Row
								key={row.id}
								data-selected={selection.includes(row.id) ? '' : undefined}
								onMouseEnter={() => {
									toggleTooltip(row.id, true);
								}}
								onMouseLeave={() => {
									toggleTooltip(row.id, false);
								}}
							>
								{row.getVisibleCells().map((cell: any) => (
									<Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
								))}
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Table.ScrollArea>

			<ActionBar.Root open={hasSelection}>
				<Portal>
					<ActionBar.Positioner>
						<ActionBar.Content>
							<ActionBar.SelectionTrigger>{selection.length} selected</ActionBar.SelectionTrigger>
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
