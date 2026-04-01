import { toHeader } from '@/script';
import { Field, NumberInput } from '@chakra-ui/react';

export default function AhCounterCell({
	value,
	setColumnValue,
	label,
}: {
	value: any;
	setColumnValue: any;
	label?: string;
}) {

	return (
		<Field.Root>
			<Field.Label>{toHeader(label || '')}</Field.Label>
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
