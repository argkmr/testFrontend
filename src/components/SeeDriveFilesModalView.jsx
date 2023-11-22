import { Modal, Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const SeeDriveFilesModalView = ({ open, setOpen, driveData }) => {

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        height: 700,
        borderRadius: '12px',
        backgroundColor: 'white',
        border: '2px solid #ff8a8a',
        boxShadow: 24,
        padding: '3em',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
    };

    const fileStyle = {
        border: '1px solid black',
        borderRadius: '15px',
        backgroundColor: '#f5cd4c',
        boxShadow: '10',
        padding: '10px',
        cursor: 'pointer',
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={style}>
                {driveData.map((file, index) => (
                    <div key={file.id}>
                        <Typography key={file.id} style={fileStyle}>
                            {`File-id: ${file.id}`}<br />
                            {`File-name: ${file.name}`}
                        </Typography>
                    </div>
                ))}
            </Box>
        </Modal>
    );
};
