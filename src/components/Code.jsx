import { useContext } from "react";

//components
import Editor from "./Editor";

import { Box, styled } from "@mui/material";

import { DataContext } from "../context/DataProvider";

// Define a styled container for the code editor components
const Container = styled(Box)`
  background-color: #060606; // Set the background color
  height: 50vh; // Set the height
  display: flex; // Set the display property to flex
`;

/**
 * Code component renders the code editor components.
 * It uses the data from the DataContext to populate the editor values.
 * When the values change, the corresponding set functions are called to update the data.
 */
const Code = () => {
  // Destructure the data and set functions from the DataContext
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    // Render the container with the code editor components
    <Container>
      {/* Render the HTML editor */}
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon="/"
        color="#FF3C41"
      />
      {/* Render the CSS editor */}
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon="*"
        color="#0EBEFF"
      />
      {/* Render the JS editor */}
      <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon="( )"
        color="#FCD000"
      />
    </Container>
  );
};

export default Code;
