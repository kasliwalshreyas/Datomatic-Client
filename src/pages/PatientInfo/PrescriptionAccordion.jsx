import { Accordion, ActionIcon, Box, Button } from '@mantine/core';
import { IconPrescription, IconDots } from '@tabler/icons';
import html2pdf from 'html2pdf.js';
import React, { useState, useEffect } from 'react';
import Prescription from '../../components/Prescription/Prescription';

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;




function AccordionControl(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px' }} >
            <Accordion.Control {...props} />
            <Button sx={{ marginRight: '10px' }} onClick={() => {
                html2pdf(document.getElementById('prescription' + props.prescriptionid))
            }}>
                Download
            </Button>
            <Button sx={{ marginRight: '10px' }}>
                Share
            </Button>
        </Box>
    );
}

const PrescriptionAccordion = ({ state, phoneNumber }) => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        getPrescriptions();
    }, []);

    const getPrescriptions = async () => {
        const res = await fetch(`${BACKEND_URL}/doctor/patient-prescriptions/${phoneNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token,
            },
        });

        const resData = await res.json();

        if (res.status === 401) {
            console.log(resData.message || "Authorization failed");
            return;
        }

        if (res.status === 422) {
            console.log(resData.message || "Validation failed");
            return;
        }

        if (res.status !== 200 && res.status !== 201) {
            console.log(resData.message || "Fetching prescription failed.");
            return;
        }

        setPrescriptions(resData.prescriptions);
    };



    return (
        <Accordion variant="separated" disableChevronRotation >
            {prescriptions.map((prescription) => {
                return (
                    <Accordion.Item key={prescription._id} value={prescription._id} sx={{ width: '100%' }}>
                        <AccordionControl prescriptionid={prescription._id}>
                            <IconPrescription display={'inline-block'} size={20} /> {prescription.date}
                        </AccordionControl>
                        <Accordion.Panel>
                            <Prescription prescriptionId={prescription._id} state={state} />
                        </Accordion.Panel>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
}

export default PrescriptionAccordion;