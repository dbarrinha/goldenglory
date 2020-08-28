import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Row, Col, Input, Alert } from 'reactstrap';
import Upload from 'components/Notifications/Upload'
import Filelist from 'components/Notifications/FileList'
import uniqueId from 'lodash/uniqueId'
import filesize from 'filesize'

export default function AnexoModal({ text, onConfirm, toggle, isOpen }) {

    return (
        <Modal isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>
                {text}
            </ModalHeader>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
                <Button color="primary" onClick={onConfirm}>Confirmar</Button>{' '}
            </ModalFooter>
        </Modal>
    );
}
