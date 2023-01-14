import React from 'react';
import { Paper, Text, createStyles } from '@mantine/core';


const ProfileStatsCard = ({ stat, classes }) => {

    return (
        <Paper className={classes.stat} radius="md" shadow="md" p="xs">
            <stat.icon size={32} className={classes.icon + ' ' + (stat.label === 'Height' ? classes.rotateIcon : '')} stroke={1.5} />
            {/* <stat.icon size={32} className={classes.icon + ' '} stroke={1.5} /> */}
            {/* {stat.label === 'Height' ? <stat.icon size={32} className={classes.icon + ' ' + classes.rotateIcon} stroke={1.5} /> : <stat.icon size={32} className={classes.icon + ' '} stroke={1.5} />} */}
            <div>
                <Text className={classes.label}>{stat.label}</Text>
                <Text size="xs" className={classes.count}>
                    <span className={classes.value}>{Math.floor(Math.random() * 6 + 4)}km</span> / 10km
                </Text>
            </div>
        </Paper>
    );
}

export default ProfileStatsCard;