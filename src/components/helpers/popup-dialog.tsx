import { DialogProps } from '@/types';
import { createOverlay, Dialog, Portal, CloseButton } from '@chakra-ui/react';

export const dialog = createOverlay<DialogProps>((props) => {
	const { title, description, content, ...rest } = props;
	return (
		<Dialog.Root {...rest}>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						{title && (
							<Dialog.Header>
								<Dialog.Title>{title}</Dialog.Title>
							</Dialog.Header>
						)}

						{content}
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
});
