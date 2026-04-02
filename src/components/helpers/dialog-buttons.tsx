import { Button, CloseButton, Dialog, Input } from '@chakra-ui/react';
import { buttonStyle } from '../../styles';
import { useEffect, useState } from 'react';

export default function DialogContent({
	description,
	onClick,
	showInput = false,
}: {
	description?: any;
	onClick?: any;
	showInput?: any;
}) {
	const [crutchWordTemp, setCrutchWordTemp] = useState('');

	return (
		<>
			<Dialog.Body spaceY='4'>
				{description && <Dialog.Description>{description}</Dialog.Description>}
				{showInput && (
					<Input
						placeholder='Enter Crutch Word'
						variant='outline'
						value={crutchWordTemp}
						onChange={(e: any) => setCrutchWordTemp(e.target.value)}
					/>
				)}
			</Dialog.Body>
			<Dialog.Footer>
				<Dialog.ActionTrigger asChild>
					<Button {...buttonStyle} variant='outline'>
						Cancel
					</Button>
				</Dialog.ActionTrigger>
				<Dialog.ActionTrigger asChild>
					<Button {...buttonStyle} onClick={() => onClick(crutchWordTemp)}>
						OK
					</Button>
				</Dialog.ActionTrigger>
			</Dialog.Footer>
			<Dialog.CloseTrigger asChild>
				<CloseButton size='sm' />
			</Dialog.CloseTrigger>
		</>
	);
}
