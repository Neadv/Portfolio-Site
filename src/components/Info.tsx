import {
    Box,
    Grid,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

const Info = () => {
    return (
        <Box sx={{ margin: "20px 0" }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography fontSize={30} align="center" marginBottom={1}>
                        About me
                    </Typography>
                    <Typography fontSize={18} marginBottom="5px">
                        I’m Vladyslav and I am a WEB development master.
                    </Typography>
                    <Typography fontSize={18} marginBottom="5px">
                        I have excellent knowledge of creating. My main goal in
                        development is to bring client’s ideas to life. Perfect
                        mark for me is a satisfied customer who is satisfied
                        with our work.
                    </Typography>
                    <Typography fontSize={18} marginBottom="5px">
                        I am a specialist in working with ASP.Net Core, HTML,
                        C/C#/, SQL. Writing simple, readable,
                        context-independent code. Adaptation/Implementation of
                        plugins. Neat, logical, thoughtful code.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography fontSize={30} align="center" marginBottom={1}>
                        Skills
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="ASP.Net Core" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="C#" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Entity Framework" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="HTML/CSS" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="JavaScript" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="TypeScript" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Vue" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="React" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="SQL (SQL Server, 
                                        MySQL, PostgreSQL)"
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Docker" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <Icon fontSize="small">circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Git" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Info;
