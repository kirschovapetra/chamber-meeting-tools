'use client';
import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';
import { PageType } from '@/types';

export default function AhCounter() {
	const AH_COUNTER_DEFAULT = {
		role: '',
		speaker: '',
		generic: {
			ah: '0',
			um: '0',
			er: '0',
			well: '0',
			so: '0',
			like: '0',
			but: '0',
			repeats: '0',
			'you know': '0',
			other: '0',
		},
		tooltipVisible: false,
	};

	const PAGE_ID = PageType.AH_COUNTER;

	return (
		<>
			<NavigationMenu />
			<TablePageWrapper
				columnHeaders={['role', 'speaker']}
				defaultRow={AH_COUNTER_DEFAULT}
				pageId={PAGE_ID}
			/>
		</>
	);
}
