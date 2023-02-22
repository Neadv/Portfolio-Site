import Fab from "@mui/material/Fab";
import Icon from "@mui/material/Icon";
import React, { FC } from "react";

const ContactButton: FC = () => {
    const handleClick = () => {
        const a = document.createElement("a");
        a.href = "mailto:vlkrinitskiy@gmail.com";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <Fab
            variant="extended"
            sx={{
                position: "fixed",
                bottom: "16px",
                right: "16px",
            }}
            onClick={handleClick}
        >
            <Icon sx={{ mr: 1 }}>edit</Icon>
            Contact
        </Fab>
    );
};

export default ContactButton;
