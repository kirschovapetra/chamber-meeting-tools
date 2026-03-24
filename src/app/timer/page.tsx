"use client"

import { dataTemplate, defaultRow } from '@/components/data/data';
import EditableName from '@/components/ui/editable-name';
import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import NavigationMenu from '@/components/ui/navigation-menu';
import RowButtons from '@/components/ui/row-buttons';
import TableCheckbox from '@/components/ui/table-checkbox';
import { Checkbox } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

export default function Timer() {
	const [data, setData] = useState<TimerRow[]>(dataTemplate);
	const [selection, setSelection] = useState<string[]>([]);
	
	const columnHelper = createColumnHelper<TimerRow>();

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
	const deleteSelectedRows = () => {
		setData(data.filter((val, i) => !selection.includes(i.toString())));
		setSelection([]);
	};
	const addRow = (info: any, offset: number) => {
		setData(data.toSpliced(info.row.index + offset, 0, defaultRow));
		setSelection([]);
	};

	const columns = useMemo(
		() => [
			columnHelper.accessor('checkbox', {
				header: '',
				cell: (info: any) => <TableCheckbox selection={selection} setSelection={setSelection} info={info}/>
					
			}),
			columnHelper.accessor('role', {
				header: ()=> <EditableName name='Role' setColumnValue={()=>{}}/>,
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
				header: ()=> <EditableName name='Speaker' setColumnValue={()=>{}}/>,
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
				header: ()=> <EditableName name='Green' setColumnValue={()=>{}}/>,
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
				header: ()=> <EditableName name='Amber' setColumnValue={()=>{}}/>,
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
				header: ()=> <EditableName name='Red' setColumnValue={()=>{}}/>,
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
				header: ()=> <EditableName name='Result Time' setColumnValue={()=>{}}/>,
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
		],
		[],
	);

	return (
		<>
			<NavigationMenu />
			<GlobalLayout title='Timer' children={
				<GenericTable data={data} 
				columns={columns} 
				selection={selection} 
				toggleTooltip={toggleTooltip} 
				deleteSelectedRows={deleteSelectedRows} />} />
		</>
	);
}
