import AddRowMenu from '@/components/helpers/add-row-menu';
import EditableName from '@/components/helpers/editable-name';
import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import TableCheckbox from '@/components/helpers/table-checkbox';
import { fetchPageData, resetPageData, storePageData, toCamelCase } from '@/script';
import { createColumnHelper } from '@tanstack/react-table';
import { useState, useEffect, useRef } from 'react';
import RowButtons from '../helpers/row-buttons';

function useIsMounted() {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	});

	return isMounted;
}

export default function TablePageWrapper({
	columnHeaders,
	defaultRow,
	pageId,
}: {
	columnHeaders: string[];
	defaultRow: Row;
	pageId: string;
}) {
	const [data, setData] = useState<Row[]>([]);
	const [selection, setSelection] = useState<Set<string>>(new Set<string>());
	const isMountedRef = useIsMounted();
	useEffect(() => {
		async function fetchData() {
			const result = await fetchPageData(pageId);
			if (isMountedRef.current) {
				setData(result);
			}
		}

		fetchData();
	}, [isMountedRef]);

	const addRow = () => {
		updateData([...data, {...defaultRow}]);
		setSelection(new Set());
	};

	const updateData = (newData: any, local: boolean = false) => {
		if (!local) storePageData(pageId, newData);
		setData(newData);
	};

	const resetData = async () => {
		resetPageData(pageId);
		setData(await fetchPageData(pageId));
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
		console.log(info.row.index)
		updateData(data.toSpliced(info.row.index + offset, 0, {...defaultRow}));
		setSelection(new Set());
	};

	const columnHelper = createColumnHelper<Row>();

	const toggleTimer = (info: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx) as TimerRow;
		console.log(dataObj)
		if (dataObj !== undefined) {
			dataObj.buttons = dataObj.buttons == 'Start' ? 'Stop' : 'Start';
			updateData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const resetTimer = (info: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx) as TimerRow;
		if (dataObj !== undefined) {
			dataObj.buttons = 'Start';
			dataObj.resultTime = '0:00';
			updateData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};

	// const getStatus = (info: any) => {
	// 	const dataObj = data.at(info.row.index) as TimerRow;
	// 	return (dataObj !== undefined) ? dataObj.status : '';
	// }; 

	const columns = [
		...[
			columnHelper.accessor('checkbox', {
				header: '',
				cell: (info: any) => (
					<TableCheckbox selection={selection} setSelection={setSelection} info={info} />
				),
			}),
		],
		...columnHeaders.map((header: any) => {
			return columnHelper.accessor(header, {
				header: () => <EditableName name={toCamelCase(header)} setColumnValue={() => {}} />,
				cell: (info: any) => {
					return (
						<EditableName
							name={info.getValue() || ''}
							setColumnValue={(val: any) => {
								setColumnValue(header, info.row.index, val);
							}}
						/>
					);
				},
			});
		}),
		...[
			columnHelper.accessor('buttons', {
				header: '',
				cell: (info: any) => {
					if (pageId == 'grammarian') {
						return <AddRowMenu insertRow={(offset: any) => insertRow(info, offset)} />;
					} else if (pageId == 'timer') {
						return (
							<RowButtons
								insertRow={(offset: any) => insertRow(info, offset)}
								toggleTimer={() => toggleTimer(info)}
								resetTimer={() => resetTimer(info)}
								value={(info.getValue())}
							/>
						);
					} else {
						return <></>;
					}
				},
			}),
		],
	];

	return (
		<GlobalLayout
			title={toCamelCase(pageId)}
			addRow={addRow}
			reset={resetData}
			generatePdf={() => console.log('generate pdf')}
			isMounted={isMountedRef.current}
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
	);
}
