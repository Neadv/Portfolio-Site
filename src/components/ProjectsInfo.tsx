import {
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const ProjectsInfo = () => {
    const fistProjectDesc =
        // eslint-disable-next-line max-len
        "Telegram service for sending scheduled messages and automatic message replying for Apple device distributor (Django, Vue)";
    const secondProjectDesc =
        // eslint-disable-next-line max-len
        "Project for security for automating guest’s passing control (Node.Js backend, Javascript bot and Vue)";
    const thirdProjectDesc =
        // eslint-disable-next-line max-len
        "Website for setting up different workflows for mapping data from one type of source to another one. The system allows you to create complex flows for mapping data from different sources simultaneously to the result source with doing necessary conversions (Asp.Net Core backend, Vue frontend)";
    const forthProjectDesc =
        // eslint-disable-next-line max-len
        "System for processing customer's cases. It can extract and parse cases from different sources, like: email, interaction with external API, manual creating. Also the website allows you to set up a workflow for forwarding solved cases to customers directly (Asp.Net Core backend, Vue frontend)";
    return (
        <>
            <Typography fontSize={30} align="center" marginBottom={1}>
                Projects
            </Typography>
            <Typography fontSize={18} margin={1}>
                I have experience of leading different start-ups for more than 5
                years. I’ve worked as a freelancer and developed several
                projects. I have excellent knowledge of creating. My main goal
                in development is to bring client’s ideas to life. Perfect mark
                for me is a satisfied customer who is satisfied with our work.
            </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <Icon fontSize="small">circle</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{ fontSize: "18px" }}
                        secondaryTypographyProps={{ fontSize: "16px" }}
                        primary="Scheduled Message Sender"
                        secondary={fistProjectDesc}
                    />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <Icon fontSize="small">circle</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{ fontSize: "18px" }}
                        secondaryTypographyProps={{ fontSize: "16px" }}
                        primary="Guest’s Passing Control System"
                        secondary={secondProjectDesc}
                    />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <Icon fontSize="small">circle</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{ fontSize: "18px" }}
                        secondaryTypographyProps={{ fontSize: "16px" }}
                        primary="Mapping Server"
                        secondary={thirdProjectDesc}
                    />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <Icon fontSize="small">circle</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{ fontSize: "18px" }}
                        secondaryTypographyProps={{ fontSize: "16px" }}
                        primary="Case Management System"
                        secondary={forthProjectDesc}
                    />
                </ListItem>
            </List>
            <Typography fontSize={18} margin={1}>
                I can describe for a long time who I am and what I can do, but I
                hope that I have described correctly. I look forward to your
                request and will make the future together!
            </Typography>
        </>
    );
};

export default ProjectsInfo;
