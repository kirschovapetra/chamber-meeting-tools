import { Checkbox, Editable, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu';

export default function TableCheckbox({
	selection,
	setSelection,
	info,
}: {
	selection: Set<string>;
	setSelection: any;
	info: any;
}) {
	return (
		<Checkbox.Root
			size='sm'
			top='0.5'
			aria-label='Select row'
			checked={Array.from(selection).includes(info.row.id)}
			onCheckedChange={(changes: any) => {
				setSelection((prev: any) =>
					changes.checked
						? [...prev, info.row.id]
						: Array.from(selection).filter((id: any) => id !== info.row.id),
				);
			}}
		>
			<Checkbox.HiddenInput />
			<Checkbox.Control />
		</Checkbox.Root>
	);
}
