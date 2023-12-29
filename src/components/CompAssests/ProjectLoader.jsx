
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import { useState } from "react";

const NoContentCard = () => {
    return (
        <Card variant="outlined" sx={{ width: 470, height:"175px", display: 'flex', gap: 2, border: '2px solid', color: 'rgb(229 231 235)' }}>
            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly Lorem ipsum is placeholder
                </Skeleton>
            </Typography>

            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder
                </Skeleton>
            </Typography>

            <div className={"flex gap-5"}>
                <Typography>
                    <Skeleton>
                        placeholder
                    </Skeleton>
                </Typography>

                <Typography>
                    <Skeleton>
                        placeholder
                    </Skeleton>
                </Typography>
            </div>
        </Card>
    );
}

const ProjectLoader = ({loadingState}) => {

    return (
        loadingState && (
            <ul className={"flex gap-7 mt-5 flex-wrap"}>
                {[...Array(6)].map((_, index) => (
                    <NoContentCard key={index} />
                ))}
            </ul>
        )
    );
}

export default ProjectLoader;
