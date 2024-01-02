
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import { useState } from "react";

export const NoSurveyCard = () => {
    return (
        <Card variant="outlined" sx={{ display: 'flex', gap: 2, border: '2px solid', color: 'rgb(229 231 235)' }}>
            <div className={"flex justify-between"}>
                <div className={""}>
                    <Typography>
                        <Skeleton>
                            -------------------
                        </Skeleton>
                    </Typography>

                    <Typography>
                        <Skeleton>
                            ----------------------------
                        </Skeleton>
                    </Typography>
                </div>

                <div className={"flex gap-2"}>
                    <Typography>
                        <Skeleton>
                            ----
                        </Skeleton>
                    </Typography>

                    <Typography>
                        <Skeleton>
                            placeholder
                        </Skeleton>
                    </Typography>
                </div>
            </div>

            <div className={"flex lg:flex-row flex-col gap-5"}>
                <Typography>
                    <Skeleton variant="rectangular" className={"lg:min-w-52 w-full"} height={118}>
                        placeholder
                    </Skeleton>
                </Typography>

                <Typography>
                    <Skeleton variant="rectangular" className={"lg:min-w-52 w-full"} height={118}>
                        placeholder
                    </Skeleton>
                </Typography>

                <Typography>
                    <Skeleton variant="rectangular" className={"lg:min-w-52 w-full"} height={118}>
                        placeholder
                    </Skeleton>
                </Typography>

                <Typography>
                    <Skeleton variant="rectangular" className={"lg:min-w-52 w-full"} height={118}>
                        placeholder
                    </Skeleton>
                </Typography>

                <Typography>
                    <Skeleton variant="rectangular" className={"lg:min-w-52 w-full"} height={118}>
                        placeholder
                    </Skeleton>
                </Typography>

                <Typography>
                    <Skeleton variant="rectangular" className={"lg:min-w-52 w-full"} height={118}>
                        placeholder
                    </Skeleton>
                </Typography>
            </div>
        </Card>
    );
}

const NoProjectCard = () => {
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

const ProjectLoader = ({loadingState, loaderType, count}) => {

    const cardType = {
        "project": <NoProjectCard />,
        "survey": <NoSurveyCard />
    }

    return (
        loadingState && (
            <ul className={"flex gap-7 mt-5  flex-wrap"}>
                {[...Array(count)].map((_, index) => (
                    <li key={index} className={loaderType === 'survey' && 'w-full'}>
                        {cardType[loaderType]}
                    </li>
                ))}
            </ul>
        )
    );
}

export default ProjectLoader;
