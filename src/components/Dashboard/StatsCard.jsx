import {
    Image,
    HStack,
    Box,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
} from "@chakra-ui/react";
import React from "react";
const StatsCard = () => {
    return (
        <Stat
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            minWidth={"300px"}
            overflowWrap={"break-word"}
            backgroundColor={"rgb(255, 255, 255)"}
            borderRadius={"20px"}
            borderColor={"#E2E8F0"}
            borderWidth={"1px"}
            margin={"10px"}
            padding={"15px 20px"}
        >
            <Box>
                <HStack spacing={'24px'}>

                    <Image
                        borderRadius='full'
                        boxSize='50px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Box width={"full"}>
                        <StatLabel>Collected Fees</StatLabel>
                        <StatNumber>£0.00</StatNumber>
                        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                    </Box>

                </HStack>
            </Box>
        </Stat>
    );
}

export default StatsCard;