import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react';
import QRCode from "react-qr-code";

const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

const ScanPage = ({ state,setState,setAutoLogout}) => {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                w="25em"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
            >

                <QRCode
                    size={256}
                    style={{ height: "auto", width: "60%", marginTop: "40%", marginBottom: "50%", marginLeft: "30%", marginRight: "30%" }}
                    value={state.userId}
                    viewBox={`0 0 256 256`}
                />

                <Box p="6">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            istruncated="true">
                            Pharmacy name
                        </Box>
                    </Flex>

                </Box>
            </Box>
        </Flex>
    );
}

export default ScanPage;