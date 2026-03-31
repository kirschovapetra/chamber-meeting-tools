'use client'
import GlobalLayout from '@/components/ui/global-layout';
import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';

export default function AhCounter() {

	const AH_COUNTER_DEFAULT = {
		role: '',
		speaker: '',
		wordCounts: [{word:'ah', count:1}, {word:'oh', count:1}],
		tooltipVisible: false,
	};

	const PAGE_ID = 'ahCounter';

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
