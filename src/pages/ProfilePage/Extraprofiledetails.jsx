import React from 'react';
import { Flex, Card, createStyles, Avatar, Box, Title, Button, Group, Paper, Text } from '@mantine/core';

const Extraprofiledetails = ({ classes }) => {

    return (
        <Flex className={classes.Extraprofiledetailscontainer}>
            <Flex className={classes.Extradetailscontainer1}>
                <Flex className={classes.Extradetailsname}>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Blood Group</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Asthma</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Do you smoke</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Do you Consume Alcohol</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Used Drugs</Title></Box>
                    
                </Flex>
                <Flex className={classes.Extradetailsvalue}>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>B+</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>weekly</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                   
                </Flex>
             </Flex>
             <Flex className={classes.Extradetailscontainer2}>
                <Flex className={classes.Extradetailsname}>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Raised Blood Pressure</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Heart Disease</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Diabetes</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Liver Disease</Title></Box>
                    <Box className={classes.Extradetailsnamebox}><Title order={3} className={classes.infolongtext}>Thyroid Disease</Title></Box>
                </Flex>
                <Flex className={classes.Extradetailsvalue}>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                    <Box className={classes.Extradetailsvaluebox}><Title order={3} className={classes.infoshorttext}>No</Title></Box>
                </Flex>
             </Flex>
        </Flex>
        
    );
}

export default Extraprofiledetails;