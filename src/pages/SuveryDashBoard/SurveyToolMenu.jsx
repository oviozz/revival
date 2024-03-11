

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
import {useParams} from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import toast from "react-hot-toast";


export default function SurveyToolMenu({survey}) {

    const { projectID } = useParams();
    const { buildings } = survey;
    const pageURL = `http://localhost:5173/${projectID}/${survey._id}`
    const { deleteSurvey, updateSurvey } = useSurveysContext();
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isURLCopied, setURLCopied] = useState(false);


    const copyURLToClipboard = () => {
        navigator.clipboard.writeText(pageURL); // Copy URL to clipboard
        setURLCopied(true); // Set state to indicate URL is copied
        setTimeout(() => {
            setURLCopied(false); // Reset state after a certain duration
        }, 1000); // 1000 milliseconds = 1 second

        toast.success("Link Copied!");
    };

    const openEditModal = () => {
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };
    const deleteHandler = async () => {
        if (buildings.length >= 1){
            toast.error("Please delete the buildings first");
        }else {
            await deleteSurvey(survey["_id"])
        }
    }

    const dropdownButton = (
        <div className={"hover:bg-white p-1 rounded-md "}>
            <MoreVert />
        </div>
    );

    return (
        <>
            <Dropdown renderTrigger={() => dropdownButton} label={""}>
                <Dropdown.Item onClick={copyURLToClipboard} className={"text-md flex gap-2 text-blue-500"}>
                    <FaLink />
                    <span className={"font-semibold text-md"}>
                        {isURLCopied ? "Copied" : "Share"}
                    </span>
                </Dropdown.Item>
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
