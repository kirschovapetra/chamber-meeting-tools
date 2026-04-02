'use client';

import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';
import { PageType, TIMER_DEFAULT } from '@/types';

export default function Timer() {
	return (
		<>
			<NavigationMenu />
			<TablePageWrapper
				columnHeaders={['role', 'speaker', 'greenTime', 'amberTime', 'redTime', 'resultTime']}
				defaultRow={TIMER_DEFAULT}
				pageId={PageType.TIMER}
			/>
		</>
	);
}
