import { Accordion } from '@mantine/core';
import { IconPrescription } from '@tabler/icons';
import React from 'react';
import Prescription from '../../components/Prescription/Prescription';

const PrescriptionAccordion = () => {
    return (
        <Accordion variant="separated">
            <Accordion.Item value="customization" sx={{ width: '100%' }}>
                <Accordion.Control>13/01/2023</Accordion.Control>
                <Accordion.Panel><Prescription /></Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="flexibility">
                <Accordion.Control>12/01/2023</Accordion.Control>
                <Accordion.Panel><Prescription /></Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="focus-ring">
                <Accordion.Control>05/03/2022</Accordion.Control>
                <Accordion.Panel><Prescription /></Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}

export default PrescriptionAccordion;