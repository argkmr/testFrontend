import React, { useState, useEffect } from 'react';
import { style } from './Button'
import { Button } from '@mui/material'
import SeeDriveData from './SeeDriveData';

export const ConnectToDrive = () => {

    const [driveData, setDriveData] = useState([]);

    const handleClick = async () => {
        const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&response_type=code&client_id=415782016175-p2tjm87k7acres9fj9506vsk2mnhm54o.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000";

        window.location.href = AUTH_URL;
    };

    useEffect(() => {
        const AUTH_CODE = window.location.href;
        if (AUTH_CODE.includes("?code=")) {
            let startIdx = AUTH_CODE.indexOf("code");
            startIdx += 5;
            const lastIdx = AUTH_CODE.indexOf('&');
            const a_code = AUTH_CODE.slice(startIdx, lastIdx);
            console.log(a_code);

            if (a_code) {
                const fetchToken = async () => {
                    console.log(a_code)
                    const options = {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ code: a_code })
                    }

                    const response = await fetch("/getToken", options);
                    const result = await response.json();
                    console.log(result.access_token);
                    const a_token = result;

                    const fetchDriveData = async () => {
                        console.log(a_token);
                        const options = {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ token: a_token })
                        }

                        const response = await fetch("/getDriveData", options);
                        const result = await response.json();
                        console.log(result);
                        setDriveData(result);
                    }
                    fetchDriveData();
                };
                fetchToken();
            }
        }

    }, []);

    useEffect(() => {

    })

    console.log(driveData);

    return (
        <>
            <Button style={style} onClick={() => {
                handleClick();
            }}>Connect To Drive</Button>
            <SeeDriveData driveData={driveData} />
        </>
    )
}

