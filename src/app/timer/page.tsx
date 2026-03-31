'use client';

import EditableName from '@/components/helpers/editable-name';
import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import NavigationMenu from '@/components/ui/navigation-menu';
import RowButtons from '@/components/helpers/row-buttons';
import TableCheckbox from '@/components/helpers/table-checkbox';
import { fetchPageData, resetPageData, storePageData, toCamelCase } from '@/script';
import { createColumnHelper } from '@tanstack/react-table';
import { useEffect, useState } from 'react';


export default function Timer() {

	const TIMER_DEFAULT = {
		time: '',
		role: '',
		speakerName: '',
		greenTime: '0:00',
		amberTime: '0:00',
		redTime: '0:00',
		resultTime: '0:00',
		status: 'Start',
		tooltipVisible: false,
	};

	const PAGE_ID = 'timer';
	
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState<TimerRow[]>([]);
	const [selection, setSelection] = useState<Set<string>>(new Set<string>());

	useEffect(() => {
		setData(fetchPageData(PAGE_ID));
		if (!isLoaded) setIsLoaded(true);
	}, [isLoaded]);

	const toggleTimer = (info: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx);
		if (dataObj !== undefined) {
			dataObj.status = dataObj.status == 'Start' ? 'Stop' : 'Start';
			updateData(
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
			updateData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const toggleTooltip = (dataObjIdx: any, visible: boolean) => {
		setColumnValue('tooltipVisible', dataObjIdx, visible, true);
	};
	const setColumnValue = (
		columnName: any | never,
		dataObjIdx: any,
		value: any,
		local: boolean = false,
	) => {
		updateData(
			data.map((val, i) => {
				if (i === dataObjIdx) {
					return {
						...val,
						[columnName]: value,
					};
				}
				return val;
			}),
			local,
		);
	};
	const deleteSelectedRows = () => {
		updateData(data.filter((val, i) => !Array.from(selection).includes(i.toString())));
		setSelection(new Set());
	};
	const insertRow = (info: any, offset: number) => {
		updateData(data.toSpliced(info.row.index + offset, 0, TIMER_DEFAULT));
		setSelection(new Set());
	};

	const addRow = () => {
		updateData([...data, TIMER_DEFAULT]);
		setSelection(new Set());
	};

	const updateData = (newData: any, local: boolean = false) => {
		if (!local) storePageData(PAGE_ID, newData);
		setData(newData);
	};

	const resetData = () => {
		resetPageData(PAGE_ID);
		setData(fetchPageData(PAGE_ID));
	};

	const columnHelper = createColumnHelper<TimerRow>();
	const columns = [
		columnHelper.accessor('checkbox', {
			header: '',
			cell: (info: any) => (
				<TableCheckbox selection={selection} setSelection={setSelection} info={info} />
			),
		}),
		columnHelper.accessor('role', {
			header: () => <EditableName name='Role' setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('role', info.row.index, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('speakerName', {
			header: () => <EditableName name='Speaker' setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('speakerName', info.row.index, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('greenTime', {
			header: () => <EditableName name='Green' setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('greenTime', info.row.index, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('amberTime', {
			header: () => <EditableName name='Amber' setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('amberTime', info.row.index, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('redTime', {
			header: () => <EditableName name='Red' setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('redTime', info.row.index, val);
						}}
					/>
				);
			},
		}),
		columnHelper.accessor('resultTime', {
			header: () => <EditableName name='Result Time' setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
						setColumnValue={(val: any) => {
							setColumnValue('resultTime', info.row.index, val);
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
						insertRow={(offset: any) => insertRow(info, offset)}
						toggleTimer={() => toggleTimer(info)}
						resetTimer={() => resetTimer(info)}
						value={info.getValue()}
					/>
				);
			},
		}),
	];

	return (
		<>
			<NavigationMenu />
			<GlobalLayout
				title={toCamelCase(PAGE_ID)}
				addRow={addRow}
				reset={resetData}
				generatePdf={() => console.log('generate pdf')}
				children={
					<GenericTable
						data={data}
						columns={columns}
						selection={selection}
						toggleTooltip={toggleTooltip}
						deleteSelectedRows={deleteSelectedRows}
					/>
				}
			/>
		</>
	);
}
