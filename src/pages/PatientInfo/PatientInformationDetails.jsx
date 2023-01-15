import { IconPlus } from '@tabler/icons';
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
    {
        id: 'bender',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Bender Bending Rodríguez',
        description: 'Fascinated with cooking, though has no sense of taste',
        content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
    },

    {
        id: 'carol',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
        label: 'Carol Miller',
        description: 'No',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
    },

    {
        id: 'homer',
        image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
        label: 'Homer Simpson',
        description: 'Overweight, lazy, and often ignorant',
        content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
    },
    {
        id: 'bender0',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Diabetes',
        description: 'No',
        content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
    },
    {
        id: 'bender2',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Hypertension',
        description: 'Yes',
        content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
    },
    {
        id: 'bender3',
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'HypertensionExplanation',
        description: 'No',
        content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
    }

];



function AccordionLabel(item, value) {
    console.log(item, value);
    return (
        <Group noWrap>
            {/* <Avatar src={image} radius="xl" size="lg" /> */}
            <div>
                <Text>{item}</Text>
                <Text size="sm" color="dimmed" weight={400}>
                    {value.description}
                </Text>
            </div>
        </Group>
    );
}


const PatientInformationDetails = ({ data }) => {

    console.log(data, 'from patient info details');

    const keys = Object.keys(data);
    const values = Object.values(data);
    console.log(keys);
    const items = keys.map((item, index) => (

        // <Accordion.Item value={index} key={index}>
        //     <Accordion.Control>{data[item]}</Accordion.Control>
        //     <Accordion.Panel>{data[item].description}</Accordion.Panel>
        // </Accordion.Item>
        <Accordion.Item value={index} key={index}>
            <Accordion.Control>{AccordionLabel(item, values[index])}</Accordion.Control>
            <Accordion.Panel>{values[index]}</Accordion.Panel>
        </Accordion.Item>

    )
    )
    console.log(items);
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
            <Accordion chevronPosition="right" variant="contained">
                {items}
            </Accordion>
        </>
    );
}

export default PatientInformationDetails;