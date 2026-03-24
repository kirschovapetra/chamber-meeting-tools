import GlobalLayout from '@/components/ui/global-layout';
import NavigationMenu from '@/components/ui/navigation-menu';

export default async function Grammarian() {
	return (
		<>
			<NavigationMenu />
			<GlobalLayout title='Grammarian' />
		</>
	);
}
