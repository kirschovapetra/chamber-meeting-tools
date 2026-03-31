import { Button, IconButton, Menu, Portal } from '@chakra-ui/react';
import { buttonStyle } from '../styles';
import { useState } from 'react';
import { LuCirclePlus } from 'react-icons/lu';
import AddRowMenu from './add-row-menu';

export default function RowButtons({
	insertRow,
	toggleTimer,
	resetTimer,
	value,
}: {
	insertRow: any;
	toggleTimer: any;
	resetTimer: any;
	value: any;
}) {
	return (
		<>
			<Button {...buttonStyle} onClick={toggleTimer}>
				{value}
			</Button>
			<Button {...buttonStyle} onClick={resetTimer}>
				Reset
			</Button>
			<AddRowMenu insertRow={insertRow} />
		</>
	);
}
