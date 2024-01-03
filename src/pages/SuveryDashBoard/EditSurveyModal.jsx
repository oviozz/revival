

import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import { GenerateObjectID } from '../../tools/GenerateObjectID.jsx';
import Edit from '@mui/icons-material/Edit';

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}

function EditSurveyModal({ isOpen, onClose, surveyItem, editHandler }) {

    const [survey, setSurvey] = useState({
        _id: surveyItem._id,
        surveyName: surveyItem.surveyName,
        buildingImage: surveyItem.buildingImage,
        buildings: surveyItem.buildings,
        lastUpdated: getCurrentDate(),
        surveyType: surveyItem.surveyType,
    });

    function onCloseModal() {
        onClose();
    }

    function handleInputChange(event) {
        const { name, value } = event.target;

        setSurvey((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    }
    const onUpdateProject = async () => {

        if (survey.surveyName.trim() === '') {
            alert('Please fill out both project name and client name.');
            return;
        }

        onCloseModal();

        await editHandler(surveyItem._id, survey)
    }

    const isButtonDisabled = survey.surveyName.trim() === '';

    return (
        <>
            <Modal show={isOpen} size="lg" position={'center'} onClose={onCloseModal} popup>
                <div className={'flex justify-between items-center py-3 mr-2 border-b'}>
                    <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-white">Edit Survey</h3>
                    <Modal.Header />
                </div>

                <Modal.Body>
                    <div className="space-y-6 mt-5">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="projectName" value="New Survey Name" />
                            </div>
                            <TextInput
                                name={'surveyName'}
                                id="surveyName"
                                placeholder="Type a survey name"
                                value={survey.surveyName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Button disabled={isButtonDisabled} className={'bg-logoBlue'} onClick={onUpdateProject}>
                                <HiPlus size={20} className={'mr-2'} />
                                Update Survey
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditSurveyModal;
