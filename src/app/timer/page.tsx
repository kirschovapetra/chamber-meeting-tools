'use client';

import EditableName from '@/components/helpers/editable-name';
import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import NavigationMenu from '@/components/ui/navigation-menu';
import RowButtons from '@/components/helpers/row-buttons';
import TableCheckbox from '@/components/helpers/table-checkbox';
import { fetchPageData, resetPageData, storePageData, toCamelCase } from '@/script';
import { createColumnHelper } from '@tanstack/react-table';
import { useEffect, useRef, useState } from 'react';
import TablePageWrapper from '@/components/ui/table-page-wrapper';

export default function Timer() {
	const TIMER_DEFAULT = {
		time: '',
		role: '',
		speaker: '',
		greenTime: '0:00',
		amberTime: '0:00',
		redTime: '0:00',
		resultTime: '0:00',
		buttons: 'Start',
		tooltipVisible: false,
	};

	const PAGE_ID = 'timer';

	return (
		<>
			<NavigationMenu />
			<TablePageWrapper
				columnHeaders={['role', 'speaker', 'greenTime', 'amberTime', 'redTime', 'resultTime']}
				defaultRow={TIMER_DEFAULT}
				pageId={PAGE_ID}
			/>
		</>
	);
}
