import AddRowMenu from '@/components/helpers/add-row-menu';
import EditableCell from '@/components/helpers/editable-cell';
import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import TableCheckbox from '@/components/helpers/table-checkbox';
import { fetchPageData, resetPageData, storePageData, toHeader } from '@/script';
import { createColumnHelper } from '@tanstack/react-table';
import { useState, useEffect, useRef } from 'react';
import RowButtons from '../helpers/row-buttons';
import AhCounterRow from '../helpers/ah-counter-row';
import { PageType, Row, TimerRow } from '@/types';
import { HStack } from '@chakra-ui/react';

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
	showHeading,
	subtitle,
	showCrutchWordButton,
}: {
	columnHeaders: string[];
	defaultRow: Row;
	pageId: string;
	showHeading?: boolean;
	subtitle?: string;
	showCrutchWordButton?: boolean;
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
		updateData([...data, { ...defaultRow }]);
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
		updateData(data.toSpliced(info.row.index + offset, 0, { ...defaultRow }));
		setSelection(new Set());
	};
	const toggleTimer = (info: any) => {
		const dataObjIdx = info.row.index;
		const dataObj = data.at(dataObjIdx) as TimerRow;
		if (dataObj !== undefined) {
			dataObj.generic = dataObj.generic == 'Start' ? 'Stop' : 'Start';
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
			dataObj.generic = 'Start';
			dataObj.resultTime = '0:00';
			updateData(
				data.map((val, i) => {
					return i == dataObjIdx ? dataObj : val;
				}),
			);
		}
	};
	const addCrutchWord = (newVal: any) => {
		const temp = data.at(0);
		if (temp !== undefined) {
			const keys = Object.keys(temp.generic).map((word) => word.toLowerCase());
			if (keys.includes(newVal.toLowerCase())) return;
		}

		updateData(
			data.map((row) => {
				return {
					...row,
					['generic']: { ...row.generic, [newVal]: 0 },
				};
			}),
		);
	};
	const deleteCrutchWord = (word: string) => {
		const temp = data.at(0);
		if (temp !== undefined) {
			const keys = Object.keys(temp.generic).map((word) => word.toLowerCase());
			if (!keys.includes(word.toLowerCase())) return;
		}
		updateData(
			data.map((row) => {
				const { [word]: _, ...rest } = row.generic; 
				return {
					...row,
					generic: rest,
				};
			}),
		);
	};

	const columnHelper = createColumnHelper<Row>();
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
				header: () => <EditableCell value={toHeader(header)} setColumnValue={() => {}} />,
				cell: (info: any) => {
					return (
						<EditableCell
							value={info.getValue() || ''}
							setColumnValue={(val: any) => {
								setColumnValue(header, info.row.index, val);
							}}
						/>
					);
				},
			});
		}),
		...[
			columnHelper.accessor('generic', {
				header: `${pageId == PageType.AH_COUNTER ? 'Word Counts' : ''}`,
				cell: (info: any) => {
					if (pageId == PageType.TIMER) {
						return (
							<RowButtons
								insertRow={(offset: any) => insertRow(info, offset)}
								toggleTimer={() => toggleTimer(info)}
								resetTimer={() => resetTimer(info)}
								value={info.getValue()}
							/>
						);
					} else if (pageId == PageType.AH_COUNTER) {
						return (
							<HStack>
								<AhCounterRow
									deleteCrutchWord={deleteCrutchWord}
									wordCounts={info.getValue()}
									setColumnValue={(val: any) => {
										setColumnValue('generic', info.row.index, val);
									}}
								/>
								<AddRowMenu insertRow={(offset: any) => insertRow(info, offset)} />
							</HStack>
						);
					} else if (/grammarian.*/.test(pageId)) {
						return <AddRowMenu insertRow={(offset: any) => insertRow(info, offset)} />;
					} else {
						return <></>;
					}
				},
			}),
		],
	];

	return (
		<GlobalLayout
			title={toHeader(pageId)}
			addRow={addRow}
			reset={resetData}
			isMounted={isMountedRef.current}
			showHeading={showHeading}
			showCrutchWordButton={showCrutchWordButton}
			addCrutchWord={addCrutchWord}
			children={
				<GenericTable
					data={data}
					columns={columns}
					selection={selection}
					toggleTooltip={toggleTooltip}
					deleteSelectedRows={deleteSelectedRows}
					subtitle={subtitle}
				/>
			}
		/>
	);
}
