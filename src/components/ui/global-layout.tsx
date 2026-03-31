'use client';
import { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { buttonStyle } from '../styles';
import LoadingScreen from './loading-screen';


function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
	isMounted.current = true;

	return () => {
	  isMounted.current = false;
	};
  });

  return isMounted;
}

export default function GlobalLayout({
	title,
	children,
	reset = () => {},
	generatePdf = () => {},
	addRow = () => {},
	isMounted=false,
}: {
	title: any;
	children?: React.ReactNode;
	reset?: any;
	generatePdf?: any;
	addRow?: any;
	isMounted?:boolean;
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
	    return <LoadingScreen/>;
	}

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

