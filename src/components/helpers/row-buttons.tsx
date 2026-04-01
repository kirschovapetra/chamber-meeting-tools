import { Button } from '@chakra-ui/react';
import { buttonStyle } from '../../styles';
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
