import React, { useState } from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { Button, Modal, Form } from 'semantic-ui-react'
import { useForm } from "react-hook-form";

const CreateNewFolder = ({ createFolder }) => {
    const [open, setOpen] = useState(false);
    const {
        register,
        errors,
        handleSubmit
    } = useForm();


    const onSubmit = (data, e) => {
        createFolder(data.newFolder || 'New Folder');
        handleClose();
    };

    console.log(errors);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="folder-container">
            <Popup
                trigger={
                    <div className="create-new-folder" onClick={handleOpen}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px">
                            <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" />
                        </svg>
                    </div>
                }
                content='New Folder'
                position='bottom center'
                inverted
            />
            <Modal size="mini" open={open} onClose={handleClose}>
                <Modal.Content>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field
                            error={Object.keys(errors).length}
                        >
                            <input
                                name="newFolder"
                                placeholder="New Folder"
                                ref={register({ maxLength: 30 })}
                            />
                        </Form.Field>
                        <Button fluid type='submit' primary>Create Folder</Button>
                        <p className="warning-msg"><Icon name="warning circle" />Folder name should be less than 30 characters</p>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default CreateNewFolder;