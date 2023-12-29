

import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Snackbar from '@mui/joy/Snackbar';

export default function AlertBar({ alertOpen, setAlertOpen, message }) {
    return (
        <Snackbar
            autoHideDuration={2000}
            open={alertOpen}
            size={'md'}
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    setAlertOpen(false);
                }
                setAlertOpen(false);
            }}
        >
            {message}
        </Snackbar>
    );
}

