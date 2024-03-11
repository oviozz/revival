
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function BuildingModal({ propertyFacts }) {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <button className={"bg-blue-500 text-white text-md p-1 rounded-l-md hover:bg-blue-700"} onClick={() => setOpen(true)}>
                View Info
            </button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                           boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />

                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Property Facts
                    </Typography>
                    <div>
                        {Object.entries(propertyFacts).map(([key, value]) => (
                            <div key={key} className={"border-b mt-2"}>
                                <Typography variant="body1"><span className={"font-semibold text-black"}>{key}</span>: {value}</Typography>
                            </div>
                        ))}
                    </div>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}
