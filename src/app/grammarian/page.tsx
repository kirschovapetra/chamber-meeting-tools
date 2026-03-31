'use client';
import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';

export default function Grammarian() {
	const GRAMMARIAN_DEFAULT = {
		speaker: '',
		quote: '',
		suggestion: '',
		tooltipVisible: false,
	};

	const PAGE_ID = 'grammarian';

	return (
		<>
			<NavigationMenu />
			<TablePageWrapper
				columnHeaders={['speaker', 'quote', 'suggestion']}
				defaultRow={GRAMMARIAN_DEFAULT}
				pageId={PAGE_ID}
			/>
		</>
	);
}
