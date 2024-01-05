
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import { GenerateObjectID } from '../../tools/GenerateObjectID.jsx';
import Edit from '@mui/icons-material/Edit';
import {useProjectsContext} from "../../hooks/useProjectsContext.jsx";

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}

function EditProjectModal({ isOpen, onClose, projectItem, editHandler }) {


    const [project, setProject] = useState({
        _id: projectItem._id,
        projectName: projectItem.projectName,
        clientName: projectItem.clientName,
        extraInfo: projectItem.extraInfo,
        userID: projectItem.userID,
        lastUpdated: getCurrentDate(),
        surveys: projectItem.surveys,
    });

    function onCloseModal() {
        onClose();
    }

    function handleInputChange(event) {
        const { name, value } = event.target;

        setProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    }
    const onUpdateProject = async () => {

        if (project.projectName.trim() === '' || project.clientName.trim() === '') {
            alert('Please fill out both project name and client name.');
            return;
        }

        onCloseModal();

        editHandler(project);
    }

    const isButtonDisabled = project.projectName.trim() === '' || project.clientName.trim() === '';

    return (
        <>
            <Modal show={isOpen} size="lg" position={'center'} onClose={onCloseModal} popup>
                <div className={'flex justify-between items-center py-3 mr-2 border-b'}>
                    <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-white">Edit Project</h3>
                    <Modal.Header />
                </div>

                <Modal.Body>
                    <div className="space-y-6 mt-5">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="projectName" value="New Project Name" />
                            </div>
                            <TextInput
                                id="projectName"
                                name={'projectName'}
                                placeholder="Type a new project name"
                                value={project.projectName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="clientName" value="New Client Name" />
                            </div>
                            <TextInput
                                id="clientName"
                                name={'clientName'}
                                placeholder="Type a new client name"
                                value={project.clientName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-full">
                            <Button disabled={isButtonDisabled} className={'bg-logoBlue'} onClick={onUpdateProject}>
                                <HiPlus size={20} className={'mr-2'} />
                                Update Project
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditProjectModal;
