import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons';

const PatientInformationDetails = () => {
    return (
        <>
            <Accordion
                chevron={<IconPlus size={16} />}
                styles={{
                    chevron: {
                        '&[data-rotate]': {
                            transform: 'rotate(45deg)',
                        },
                    },
                }}
            >
                <Accordion.Item value="focus-ring">
                    <Accordion.Control>No annoying focus ring</Accordion.Control>
                    <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="focus-ring-1">
                    <Accordion.Control>No annoying focus ring</Accordion.Control>

                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default PatientInformationDetails;