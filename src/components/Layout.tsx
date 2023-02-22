import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import React, { FC } from "react";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
            <Box
                sx={{
                    paddingTop: "50px",
                    paddingBottom: "50px",
                }}
            >
                <Paper elevation={1} sx={{ padding: "20px" }}>
                    {children}
                </Paper>
            </Box>
        </Container>
    );
};

export default Layout;
