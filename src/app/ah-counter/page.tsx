'use client';
import NavigationMenu from '@/components/ui/navigation-menu';
import TablePageWrapper from '@/components/ui/table-page-wrapper';
import { AH_COUNTER_DEFAULT, PageType } from '@/types';

export default function AhCounter() {
	return (
		<>
			<NavigationMenu />
			<TablePageWrapper
				columnHeaders={['role', 'speaker']}
				defaultRow={AH_COUNTER_DEFAULT}
				pageId={PageType.AH_COUNTER}
				showCrutchWordButton={true}
			/>
		</>
	);
}
