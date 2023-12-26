


import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import { BsBuildingFillAdd } from 'react-icons/bs';

function CreateProjectModal() {

    const [openModal, setOpenModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [clientName, setClientName] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setProjectName('');
        setClientName('');
    }

    function onCreateProject() {

        if (projectName.trim() === '' || clientName.trim() === '') {
            alert('Please fill out both project name and client name.');
            return;
        }

        const newProject = {
            projectName,
            clientName,
        };


        onCloseModal();
    }

    return (
        <>
            <Button className={"bg-logoBlue"} onClick={() => setOpenModal(true)}>
                <BsBuildingFillAdd size={20} className={'mr-2'} />
                Add Survey
            </Button>


            <Modal show={openModal} size="lg" position={'center'} onClose={onCloseModal} popup>
                <div className={'flex justify-between items-center py-3 mr-2 border-b'}>
                    <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-white">Create a Survey</h3>
                    <Modal.Header />
                </div>

                <Modal.Body>
                    <div className="space-y-6 mt-5">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="projectName" value="Survey Name" />
                            </div>
                            <TextInput
                                id="projectName"
                                placeholder="Type a survey name"
                                value={projectName}
                                onChange={(event) => setProjectName(event.target.value)}
                                required
                            />
                        </div>


                        <div className="w-full">
                            <Button className={"bg-logoBlue"} onClick={onCreateProject}>
                                <HiPlus size={20} className={'mr-2'} />
                                Create Survey
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateProjectModal;
