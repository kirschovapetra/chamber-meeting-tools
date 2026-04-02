'use client';
import {
	Box,
	Button,
	Flex,
	Heading,
} from '@chakra-ui/react';
import { buttonStyle } from '../../styles';
import LoadingScreen from './loading-screen';
import { dialog } from '../helpers/popup-dialog';
import DialogContent from '../helpers/dialog-buttons';

export default function GlobalLayout({
	title,
	children,
	reset = () => {},
	addRow = () => {},
	isMounted = false,
	showHeading = true,
	showCrutchWordButton = false,
	addCrutchWord,
}: {
	title: any;
	children?: React.ReactNode;
	reset?: any;
	addRow?: any;
	isMounted?: boolean;
	showHeading?: boolean;
	showshowHeadingTime?: boolean;
	showCrutchWordButton?: boolean;
	addCrutchWord?: any;
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

	if (!isMounted) {
		return <LoadingScreen />;
	}

	return (
		<Box paddingLeft={10} paddingRight={10}>
			{showHeading && (
				<Box marginBottom={5}>
					<Heading size={'3xl'} textAlign={'center'}>
						{title}
					</Heading>

					<Heading size='md' textAlign={'center'}>
						{getDate()}
					</Heading>
				</Box>
			)}
			<Box>{children}</Box>

			<Flex justifyContent={'flex-end'} paddingTop={1}>
				<Button {...buttonStyle} onClick={addRow}>
					Add row
				</Button>
				<Button
					{...buttonStyle}
					onClick={() => {
						dialog.open('are_you_sure', {
							title: 'Are you sure?',
							content: (
								<DialogContent description={'All your progress will be deleted.'} onClick={() => reset()} />
							),
						});
					}}
				>
					Reset
				</Button>

				{showCrutchWordButton && (
					<Button
						{...buttonStyle}
						onClick={() => {
							dialog.open('crutch_word', {
								title: 'Add Crutch Word:',
								content: (
									<DialogContent showInput={true} onClick={(newVal: any) => addCrutchWord(newVal)} />
								),
							});
						}}
					>
						Add Crutch Word
					</Button>
				)}

				<dialog.Viewport />
			</Flex>
		</Box>
	);
}
