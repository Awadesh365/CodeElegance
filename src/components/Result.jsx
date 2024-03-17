import { useState, useEffect, useContext } from "react";

import { DataContext } from "../context/DataProvider";

import { Box, styled } from "@mui/material";

// Styled container for the result component
const Container = styled(Box)`
  height: 41vh; // Set the height of the container
`;

// Result component
const Result = () => {
  // State hooks for src
  const [src, setSrc] = useState("");

  // Destructure html, css, and js from the DataContext
  const { html, css, js } = useContext(DataContext);

  // Function to generate the source code
  const generateSrcCode = () => {
    return `
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `;
  };

  // Effect hook to update the src state when html, css, or js change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(generateSrcCode());
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // Render the result component
  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      {/* Render the iframe with the generated source code */}
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
