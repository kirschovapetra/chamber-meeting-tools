'use client';

import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';
import { PageType } from '@/types';

export default function Timer() {
	const TIMER_DEFAULT = {
		time: '',
		role: '',
		speaker: '',
		greenTime: '0:00',
		amberTime: '0:00',
		redTime: '0:00',
		resultTime: '0:00',
		generic: 'Start',
		tooltipVisible: false,
	};

	const PAGE_ID = PageType.TIMER;

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
