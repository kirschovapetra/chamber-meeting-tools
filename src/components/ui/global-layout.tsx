'use client';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { buttonStyle } from '../styles';

export default function GlobalLayout({
	title,
	children,
	reset = () => {},
	generatePdf = () => {},
	addRow = () => {},
}: {
	title: any;
	children?: React.ReactNode;
	reset?: any;
	generatePdf?: any;
	addRow?: any;
}) {
	const getDate = () => {
		const dateObject = new Date();
		// UTC time 17:15:00
		dateObject.setUTCHours(17, 15, 0);

		const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		var format = new Intl.DateTimeFormat(undefined, {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		});
		return format.format(dateObject) + ' ' + localTimezone;
	};

	return (
		<Box>
			<Heading size='3xl' textAlign={'center'}>
				{title}
			</Heading>
			<Heading size='md' textAlign={'center'}>
				{getDate()}
			</Heading>
			<Box p={10}>{children}</Box>
			<Flex justifyContent={'flex-end'}>
				<Button {...buttonStyle} onClick={addRow}>
					Add row
				</Button>
				<Button {...buttonStyle} onClick={reset}>
					Reset
				</Button>
				<Button {...buttonStyle} onClick={generatePdf}>
					Export PDF
				</Button>
			</Flex>
		</Box>
	);
}
