'use client';
import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';
import { GRAMMARIAN_DEFAULT, PageType } from '@/types';

export default function Grammarian() {
	return (
		<>
			<NavigationMenu />
			<TablePageWrapper
				columnHeaders={['speaker', 'quote']}
				defaultRow={GRAMMARIAN_DEFAULT}
				pageId={PageType.GRAMMARIAN_WOTD}
				subtitle='List those who used the word of the day'
			/>
			<TablePageWrapper
				columnHeaders={['speaker', 'quote', 'suggestion']}
				defaultRow={GRAMMARIAN_DEFAULT}
				pageId={PageType.GRAMMARIAN_ERRORS}
				showHeading={false}
				subtitle='Improper Grammatical Uses/Suggestions for Improvements'
			/>
			<TablePageWrapper
				columnHeaders={['speaker', 'quote']}
				defaultRow={GRAMMARIAN_DEFAULT}
				pageId={PageType.GRAMMARIAN_QUOTES}
				showHeading={false}
				subtitle='List Quotes, Thoughts, Words, or Sayings that you Liked'
			/>
		</>
	);
}
