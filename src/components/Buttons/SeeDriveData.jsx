import { useState } from 'react';
import { style } from './Button'
import { Button } from '@mui/material'
import { SeeDriveFilesModalView } from '../SeeDriveFilesModalView';

const SeeDriveData = ({ driveData, authToken }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    console.log({ driveData })

    return (
        <>
            <Button style={style} onClick={handleOpen}>Open Drive</Button>
            <SeeDriveFilesModalView open={open} setOpen={setOpen} driveData={driveData} />
        </>
    )
}

export default SeeDriveData
