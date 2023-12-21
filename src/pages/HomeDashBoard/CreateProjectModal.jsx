
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import { BsBuildingFillAdd } from 'react-icons/bs';

function CreateProjectModal({onProjectCreate}) {
    const [openModal, setOpenModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [clientName, setClientName] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setProjectName('');
        setClientName('');
    }

    function onCreateProject() {

        const newProject = {
            projectName,
            clientName,
        };

        onProjectCreate(newProject);

        onCloseModal();
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                <BsBuildingFillAdd size={20} className={'mr-2'} />
                Add new project
            </Button>

            <Modal show={openModal} size="lg" position={'center'} onClose={onCloseModal} popup>
                <div className={'flex justify-between items-center py-3 mr-2 border-b'}>
                    <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-white">Create a Project</h3>
                    <Modal.Header />
                </div>

                <Modal.Body>
                    <div className="space-y-6 mt-5">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="projectName" value="Project Name" />
                            </div>
                            <TextInput
                                id="projectName"
                                placeholder="Type a project name"
                                value={projectName}
                                onChange={(event) => setProjectName(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="clientName" value="Client Name" />
                            </div>
                            <TextInput
                                id="clientName"
                                placeholder="Type a client name"
                                value={clientName}
                                onChange={(event) => setClientName(event.target.value)}
                            />
                        </div>

                        <div className="w-full">
                            <Button onClick={onCreateProject}>
                                <HiPlus size={20} className={'mr-2'} />
                                Create Project
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateProjectModal;
