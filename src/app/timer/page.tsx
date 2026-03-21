import GenericTable from '@/components/ui/generic-table';
import GlobalLayout from '@/components/ui/global-layout';
import NavigationMenu from '@/components/ui/navigation-menu';
import { createColumnHelper } from '@tanstack/react-table';

export default async function Timer() {
	const data = [
		{
			id: 1,
			name: 'Laptop',
			category: 'Electronics',
			price: 999.99,
			stock: 50,
		},
		{
			id: 2,
			name: 'Coffee Maker',
			category: 'Home Appliances',
			price: 49.99,
			stock: 120,
		},
		{
			id: 3,
			name: 'Desk Chair',
			category: 'Furniture',
			price: 150.0,
			stock: 30,
		},
		{
			id: 4,
			name: 'Smartphone',
			category: 'Electronics',
			price: 799.99,
			stock: 75,
		},
		{
			id: 5,
			name: 'Headphones',
			category: 'Accessories',
			price: 199.99,
			stock: 200,
		},
	];

	return (
		<>
			<NavigationMenu />
			<GlobalLayout title='Timer' children={<GenericTable d={data} />} />
		</>
	);
}
