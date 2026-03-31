'use client';
import NavigationMenu from '@/components/ui/navigation-menu';
import GrammarianTable from '@/components/ui/grammarian-table';

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
			<GrammarianTable
				columnHeaders={['speaker', 'quote', 'suggestion']}
				defaultRow={GRAMMARIAN_DEFAULT}
				pageId={PAGE_ID}
			/>

			{/* <GrammarianTable
				columnHeaders={['speaker', 'quote']}
				defaultRow={GRAMMARIAN_DEFAULT}
				pageId={PAGE_ID}
			/> */}
		</>
	);
}
