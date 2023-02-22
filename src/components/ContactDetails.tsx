import {
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import React from "react";

const ContactDetails = () => {
    return (
        <>
            <Typography fontSize={30} align="center" marginBottom={1}>
                Contact Details
            </Typography>
            <List>
                <ListItem
                    disablePadding
                    component="a"
                    href="tel:+380972780056"
                    sx={{ color: "#fff", textDecoration: "underline" }}
                >
                    <ListItemIcon>
                        <Icon fontSize="small">phone</Icon>
                    </ListItemIcon>
                    <ListItemText primary="+380972780056" />
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href="mailto:vlkrinitskiy@gmail.com"
                    sx={{ color: "#fff", textDecoration: "underline" }}
                >
                    <ListItemIcon>
                        <Icon fontSize="small">email</Icon>
                    </ListItemIcon>
                    <ListItemText primary="vlkrinitskiy@gmail.com" />
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href="https://www.linkedin.com/in/vlkrinitskiy/"
                    sx={{ color: "#fff", textDecoration: "underline" }}
                >
                    <ListItemIcon>
                        <LinkedIn />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href="https://github.com/Neadv"
                    sx={{ color: "#fff", textDecoration: "underline" }}
                >
                    <ListItemIcon>
                        <GitHub />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItem>
            </List>
        </>
    );
};

export default ContactDetails;
