import { toHeader } from '@/script';
import { CloseButton, Field, IconButton, NumberInput } from '@chakra-ui/react';
import { useState } from 'react';
import { LuVoicemail } from 'react-icons/lu';

export default function AhCounterCell({
	value,
	setColumnValue,
	label,
	deleteCrutchWord,
}: {
	value: any;
	setColumnValue: any;
	label?: string;
	deleteCrutchWord?: any;
}) {
	const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);
	return (
		<Field.Root
			onMouseOver={() => setDeleteButtonVisible(true)}
			onMouseLeave={() => setDeleteButtonVisible(false)}
		>
			<Field.Label>
				{toHeader(label || '')}
				<CloseButton
					aria-label='Call support'
					rounded='full'
					size='xs'
					visibility={deleteButtonVisible ? 'visible' : 'hidden'}
					onClick={() => deleteCrutchWord()}
				/>
			</Field.Label>
			<NumberInput.Root
				defaultValue='0'
				min={0}
				inputMode='numeric'
				value={value}
				onValueChange={(e) => setColumnValue(e.value)}
			>
				<NumberInput.Control />
				<NumberInput.Input />
			</NumberInput.Root>
		</Field.Root>
	);
}
