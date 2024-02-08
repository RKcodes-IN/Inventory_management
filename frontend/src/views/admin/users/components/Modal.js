// Modal.js
import React from 'react';
import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody } from '@chakra-ui/react';
const sizes = ['xl'];
const CustomModal = ({ isOpen, onClose, children, modalTitle }) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose} size="full"  >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{children}</ModalBody>
            </ModalContent>
        </ChakraModal>
    );
};

export default CustomModal;
