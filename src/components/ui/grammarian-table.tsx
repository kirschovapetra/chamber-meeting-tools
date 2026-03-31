
import AddRowMenu from '@/components/helpers/add-row-menu';
import EditableName from '@/components/helpers/editable-name';
import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import TableCheckbox from '@/components/helpers/table-checkbox';
import { fetchPageData, resetPageData, storePageData, toCamelCase } from '@/script';
import { createColumnHelper } from '@tanstack/react-table';
import { useState, useEffect } from 'react';

export default function GrammarianTable({columnHeaders, defaultRow, pageId}:{columnHeaders: string[], defaultRow:Row, pageId: string}) {

	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState<Row[]>([]);
	const [selection, setSelection] = useState<Set<string>>(new Set<string>());

	useEffect(() => {
		setData(fetchPageData(pageId));
		if (!isLoaded) setIsLoaded(true);
	}, [isLoaded]);

	const addRow = () => {
		updateData([...data, defaultRow]);
		setSelection(new Set());
	};

	const updateData = (newData: any, local: boolean = false) => {
		if (!local) storePageData(pageId, newData);
		setData(newData);
	};

	const resetData = () => {
		resetPageData(pageId);
		setData(fetchPageData(pageId));
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
		updateData(data.toSpliced(info.row.index + offset, 0, defaultRow));
		setSelection(new Set());
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
			header: () => <EditableName name={toCamelCase(header)} setColumnValue={() => {}} />,
			cell: (info: any) => {
				return (
					<EditableName
						name={info.getValue()}
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
					return <AddRowMenu insertRow={insertRow} />;
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
