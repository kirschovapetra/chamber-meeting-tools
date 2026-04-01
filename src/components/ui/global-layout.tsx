'use client';
import { Box, Button, CloseButton, Dialog, Flex, Heading, Portal } from '@chakra-ui/react';
import { buttonStyle } from '../../styles';
import LoadingScreen from './loading-screen';

export default function GlobalLayout({
	title,
	children,
	reset = () => {},
	addRow = () => {},
	isMounted = false,
	showHeading = true,
}: {
	title: any;
	children?: React.ReactNode;
	reset?: any;
	addRow?: any;
	isMounted?: boolean;
	showHeading?: boolean;
	showshowHeadingTime?: boolean;
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
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<Button {...buttonStyle}>Reset</Button>
					</Dialog.Trigger>
					<Portal>
						<Dialog.Backdrop />
						<Dialog.Positioner>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Are you sure?</Dialog.Title>
								</Dialog.Header>
								<Dialog.Body>
									<p>All your progress will be deleted.</p>
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.ActionTrigger asChild>
										<Button {...buttonStyle} variant='outline'>
											Cancel
										</Button>
									</Dialog.ActionTrigger>
									<Dialog.ActionTrigger asChild>
										<Button {...buttonStyle} onClick={reset}>
											OK
										</Button>
									</Dialog.ActionTrigger>
								</Dialog.Footer>
								<Dialog.CloseTrigger asChild>
									<CloseButton size='sm' />
								</Dialog.CloseTrigger>
							</Dialog.Content>
						</Dialog.Positioner>
					</Portal>
				</Dialog.Root>
			</Flex>
		</Box>
	);
}
