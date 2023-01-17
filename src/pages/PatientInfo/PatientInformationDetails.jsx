import { IconPlus } from '@tabler/icons';
import { Group, Avatar, Text, Accordion } from '@mantine/core';

function AccordionLabel({ response, value, item }) {
    // const { response, value } = a[0];
    // const item = a[1];
    // console.log(response, value, item);
    return (
        <Group noWrap>
            {/* <Avatar src={image} radius="xl" size="lg" /> */}
            <div>
                <Text>{conversion(item)}</Text>
                <Text size="sm" color="dimmed" weight={400}>
                    {response ? 'Yes' : 'No'}
                </Text>
            </div>
        </Group>
    );
}

const conversion = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    console.log(finalResult);
    return finalResult;
};


const PatientInformationDetails = ({ data, basicMedicalInformation }) => {

    console.log(data, 'from patient info details');
    console.log(basicMedicalInformation, 'from patient info details');

    const keys = Object.keys(data);
    const values = Object.values(data);

    // const basicKeys = Object.keys(basicMedicalInformation);
    // const basicValues = Object.values(basicMedicalInformation);

    // const basicItems = basicKeys.map((item) => (
    //     <Accordion.Item value={item} key={item}>
    //         <Accordion.Control>
    //             <AccordionLabel response={basicMedicalInformation[item].response} value={basicMedicalInformation[item].value} item={item} />
    //         </Accordion.Control>
    //     </Accordion.Item>
    // ));


    const items = keys.map((item) => (

        <Accordion.Item value={item} key={item}>
            <Accordion.Control>
                {/* <AccordionLabel {...data[item]} /> */}
                <AccordionLabel response={data[item].response} value={data[item].value} item={item} />
            </Accordion.Control>
            {
                data[item].response && (
                    <Accordion.Panel>
                        <Text size="sm">{data[item].description}</Text>
                    </Accordion.Panel>
                )
            }
        </Accordion.Item>
    ));
    // console.log(items);
    return (
        <>
            {/* <Accordion
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
            </Accordion> */}
            <Accordion chevronPosition="right" disableChevronRotation variant="contained">
                {/* {basicItems} */}
                {items}
            </Accordion>
        </>
    );
}

export default PatientInformationDetails;