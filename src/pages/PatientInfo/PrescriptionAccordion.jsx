import { Accordion } from '@mantine/core';
import { IconPrescription } from '@tabler/icons';
import React, { useState, useEffect } from 'react';
import Prescription from '../../components/Prescription/Prescription';

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const PrescriptionAccordion = ({ state, patientId }) => {
    const [prescriptions, setPrescriptions] = useState([]);

    console.log(patientId);

    useEffect(() => {
        getPrescriptions();
    }, []);

    const getPrescriptions = async () => {
        const res = await fetch(`${BACKEND_URL}/doctor/patient-prescriptions/${patientId}`, {
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
        <Accordion variant="separated">
            {prescriptions.map((prescription) => {
                return (
                    <Accordion.Item value="customization" sx={{ width: '100%' }}>
                        <Accordion.Control>
                            <IconPrescription size={20} />
                            {prescription.date}
                        </Accordion.Control>
                        <Accordion.Panel>
                            <Prescription prescription={prescription} />
                        </Accordion.Panel>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
}

export default PrescriptionAccordion;