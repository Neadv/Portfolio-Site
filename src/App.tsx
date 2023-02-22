import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ContactButton from "./components/ContactButton";
import Layout from "./components/Layout";
import PortfolioPhoto from "./components/PortfolioPhoto";
import Info from "./components/Info";
import ContactDetails from "./components/ContactDetails";
import ProjectsInfo from "./components/ProjectsInfo";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main>
                <Layout>
                    <PortfolioPhoto />
                    <Info />
                    <ProjectsInfo />
                    <ContactDetails />
                    <ContactButton />
                </Layout>
            </main>
        </ThemeProvider>
    );
}

export default App;
