import { Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function LoadingScreen() {
	return (
		<VStack colorPalette='teal'>
			<Spinner color='colorPalette.600' />
			<Text color='colorPalette.600'>Loading...</Text>
		</VStack>
	);
}
