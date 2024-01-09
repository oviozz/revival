

import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import MenuButton from '@mui/joy/MenuButton';
import {useState} from "react";
import {useSurveysContext} from "../../hooks/useSurveysContext.jsx";
import EditProjectModal from "../HomeDashBoard/EditProjectModal.jsx";
import EditSurveyModal from "./EditSurveyModal.jsx";
import { Dropdown } from 'flowbite-react';

export default function SurveyToolMenu({survey}) {


    const { deleteSurvey, updateSurvey } = useSurveysContext();
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const openEditModal = () => {
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };
    const deleteHandler = async () => {
        await deleteSurvey(survey["_id"])
    }

    const dropdownButton = (
        <div className={"hover:bg-white p-1 rounded-md "}>
            <MoreVert />
        </div>
    );

    return (
        <>
            <Dropdown renderTrigger={() => dropdownButton}>
                <Dropdown.Item onClick={openEditModal} className={"flex gap-2 "}>
                    <Edit />
                    <span className={"font-semibold text-md"}>Edit</span>
                </Dropdown.Item>

                <Dropdown.Item onClick={deleteHandler} className={"flex gap-2 text-red-800"}>
                    <DeleteForever />
                    <span className={"font-semibold text-md"}>Delete</span>
                </Dropdown.Item>
            </Dropdown>

            <EditSurveyModal
                editHandler={updateSurvey}
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                surveyItem={survey}
            />
        </>
    );
}
