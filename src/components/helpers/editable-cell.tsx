import { Editable, IconButton, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu';

export default function EditableCell({
	value,
	setColumnValue,
	type = 'text',
}: {
	value: any;
	setColumnValue: any;
	type?: string;
}) {
	const [localValue, setLocalValue] = useState(value);
	return (
		<Editable.Root
			value={localValue.toString()}
			onValueChange={(e) => setLocalValue(e.value)}
			onValueCommit={(e) => setColumnValue(localValue)}
			placeholder=''
		>
			<Editable.Preview />
			<Editable.Input type={type} />
			<Editable.Control>
				{(localValue == undefined || localValue.toString().length <= 0) && (
					<Editable.EditTrigger asChild>
						<IconButton variant='ghost' size='xs'>
							<LuPencilLine />
						</IconButton>
					</Editable.EditTrigger>
				)}
				<Editable.CancelTrigger asChild>
					<IconButton variant='outline' size='xs'>
						<LuX />
					</IconButton>
				</Editable.CancelTrigger>
				<Editable.SubmitTrigger asChild>
					<IconButton variant='outline' size='xs'>
						<LuCheck />
					</IconButton>
				</Editable.SubmitTrigger>
			</Editable.Control>
		</Editable.Root>
	);
}
