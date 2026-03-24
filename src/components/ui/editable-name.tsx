import { Editable, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu';

export default function EditableName({ name, setColumnValue }: { name: any; setColumnValue: any }) {
	const [localName, setLocalName] = useState(name);

	useEffect(() => {
		setLocalName(name);
	}, [name]);

	return (
		<Editable.Root value={localName} onValueChange={(e) => setLocalName(e.value)} onValueCommit={(e) => setColumnValue(e.value)} placeholder=''>
			<Editable.Preview />
			<Editable.Input />
			<Editable.Control>
				{(localName == undefined || localName.length <= 0) && (
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
