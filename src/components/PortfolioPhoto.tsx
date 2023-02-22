import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import photo from "../assets/Photo.jpg";

const Image = styled.img`
    width: 300px;
    border-radius: 50%;
`;

const PortfolioPhoto: FC = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                }}
            >
                <Image src={photo}></Image>
            </Box>
            <Typography align="center" fontSize={40}>
                Vladyslav Krynytskyi
            </Typography>
        </>
    );
};

export default PortfolioPhoto;
