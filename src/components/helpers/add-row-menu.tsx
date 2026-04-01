import { Button, IconButton, Menu, Portal } from '@chakra-ui/react';
import { buttonStyle } from '../../styles';
import { useState } from 'react';
import { LuCirclePlus } from 'react-icons/lu';

export default function AddRowMenu({ insertRow }: { insertRow: any }) {
	const [open, setOpen] = useState(false);
	return (
		<Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
			<Menu.Trigger asChild>
				<IconButton {...buttonStyle}>
					<LuCirclePlus />
				</IconButton>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value='add-up' onClick={() => insertRow(0)}>
							New Row Above
						</Menu.Item>
						<Menu.Item value='add-down' onClick={() => insertRow(1)}>
							New Row Below
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
}
