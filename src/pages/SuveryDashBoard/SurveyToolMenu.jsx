

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
import Dropdown from '@mui/joy/Dropdown';
import {useState} from "react";
import {useSurveysContext} from "../../hooks/useSurveysContext.jsx";
import EditProjectModal from "../HomeDashBoard/EditProjectModal.jsx";
import EditSurveyModal from "./EditSurveyModal.jsx";

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

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { color: 'neutral' } }}
            >
                <MoreVert />
            </MenuButton>
            <Menu placement="bottom-end">
                <MenuItem onClick={openEditModal}>
                    <Edit />
                    <span className={"font-semibold"}>Edit</span>
                </MenuItem>

                <div className={"flex gap-4 p-2 hover:bg-red-100 cursor-pointer"} onClick={deleteHandler}>
                    <DeleteForever className={'text-red-800'}/>
                    <span className={"font-semibold text-red-800"}>Delete</span>
                </div>
            </Menu>

            <EditSurveyModal
                editHandler={updateSurvey}
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                surveyItem={survey}
            />

        </Dropdown>
    );
}
