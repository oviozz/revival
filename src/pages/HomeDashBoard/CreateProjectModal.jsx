
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import { BsBuildingFillAdd } from 'react-icons/bs';
import {GenerateObjectID} from "../../tools/GenerateObjectID.jsx";
import {useProjectsContext} from "../../hooks/useProjectsContext.jsx";
import {GenerateCurrentDate} from "../../tools/GenerateCurrentDate.jsx";


function CreateProjectModal({projectLoad}) {

    const {addProject} = useProjectsContext();
    const [openModal, setOpenModal] = useState(false);

    const [project, setProject] = useState(

        {
            _id: GenerateObjectID(),
            projectName: '',
            clientName: '' ,
            extraInfo: [],
            surveys: [],
            lastUpdated: GenerateCurrentDate()
        }
    );

    function onCloseModal() {

        setOpenModal(false);
        setProject({
            _id: GenerateObjectID(),
            projectName: '',
            clientName: '',
            extraInfo: [],
            surveys: [],
            lastUpdated: GenerateCurrentDate(),
        });
    }


    function handleInputChange(event) {

        const { name, value } = event.target;

        setProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    }

    function onCreateProject() {

        addProject(project);

        onCloseModal();
    }

    const isButtonDisabled = project.projectName.trim() === '' || project.clientName.trim() === '';


    return (
        <>
            <Button disabled={projectLoad} className={"bg-logoBlue"} onClick={() => setOpenModal(true)}>
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
                                name={"projectName"}
                                placeholder="Type a project name"
                                value={project.projectName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="clientName" value="Client Name" />
                            </div>
                            <TextInput
                                id="clientName"
                                name={"clientName"}
                                placeholder="Type a client name"
                                value={project.clientName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-full">
                            <Button disabled={isButtonDisabled} className={"bg-logoBlue"} onClick={onCreateProject}>
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
