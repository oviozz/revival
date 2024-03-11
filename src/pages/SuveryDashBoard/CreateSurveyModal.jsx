


import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import { BsBuildingFillAdd } from 'react-icons/bs';
import {GenerateObjectID} from "../../tools/GenerateObjectID.jsx";
import {GenerateCurrentDateTime} from "../../tools/GenerateCurrentDate.jsx";
import {useSurveysContext} from "../../hooks/useSurveysContext.jsx";
import {useAuth} from "../../auth/AuthContext.jsx";

function CreateSurveyModal() {

    const { addSurvey } = useSurveysContext();
    const [openModal, setOpenModal] = useState(false);
    const { userInfo } = useAuth();
    const userID = userInfo.uid;

    const [survey, setSurvey] = useState({
        _id: GenerateObjectID(),
        userID: userID,
        surveyName: '',
        surveyType: "Survey",
        buildingImage: [],
        buildings: [],
        lastUpdated: GenerateCurrentDateTime()
    })

    function onCloseModal() {
        setOpenModal(false);
        setSurvey({
            _id: GenerateObjectID(),
            userID: userID,
            surveyName: '',
            surveyType: "Survey",
            buildingImage: [],
            buildings: [],
            lastUpdated: GenerateCurrentDateTime()
        })
    }

    function handleInputChange(event) {

        const { name, value } = event.target;

        setSurvey((prevSurvey) => ({
            ...prevSurvey,
            [name]: value,
        }));
    }

    function onCreateProject() {

        addSurvey(survey)

        onCloseModal();
    }

    const isButtonDisabled = survey.surveyName.trim() === '';


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
                                name={'surveyName'}
                                id="surveyName"
                                placeholder="Type a survey name"
                                value={survey.surveyName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>


                        <div className="w-full">
                            <Button disabled={isButtonDisabled} className={"bg-logoBlue"} onClick={onCreateProject}>
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

export default CreateSurveyModal;
